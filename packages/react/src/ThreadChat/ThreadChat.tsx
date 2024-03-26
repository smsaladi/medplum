import { Communication } from '@medplum/fhirtypes';
import { useMedplum, useMedplumProfile, usePrevious } from '@medplum/react-hooks';
import { useEffect, useMemo, useState } from 'react';
import { BaseChat } from '../BaseChat/BaseChat';

export interface ThreadChatProps {
  readonly thread: Communication;
}

export function ThreadChat(props: ThreadChatProps): JSX.Element | null {
  const { thread } = props;
  const medplum = useMedplum();
  const profile = useMedplumProfile();
  const prevThreadId = usePrevious<string | undefined>(thread?.id);
  const [communications, setCommunications] = useState<Communication[]>([]);

  useEffect(() => {
    if (thread?.id !== prevThreadId) {
      setCommunications([]);
    }
  }, [thread?.id, prevThreadId]);

  // Currently we only support `delivered` on chats with 2 participants
  // Normally we would use `useCallback` to memoize a function
  // But in this case we only want to conditionally pass a function if the thread has 2 participants...
  // If the thread has 3 or more participants, we do not pass this function; instead we pass undefined
  const onMessageReceived = useMemo(
    () =>
      thread.recipient?.length === 2
        ? (message: Communication): void => {
            if (!(message.received && message.status === 'completed')) {
              medplum
                .updateResource<Communication>({
                  ...message,
                  received: message.received ?? new Date().toISOString(), // Mark as received if needed
                  status: 'completed', // Mark as 'read'
                  // See: https://www.medplum.com/docs/communications/organizing-communications#:~:text=THE%20Communication%20LIFECYCLE
                  // for more info about recommended `Communication` lifecycle
                })
                .catch(console.error);
            }
          }
        : undefined,
    [medplum, thread.recipient?.length]
  );

  if (!profile) {
    return null;
  }

  return (
    <BaseChat
      communications={communications}
      setCommunications={setCommunications}
      query={`part-of=Communication/${thread.id as string}`}
      onMessageReceived={onMessageReceived}
    />
  );
}
