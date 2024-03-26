import { createReference, getReferenceString } from '@medplum/core';
import { Communication } from '@medplum/fhirtypes';
import { useMedplum, useMedplumProfile } from '@medplum/react-hooks';
import { useCallback } from 'react';

export function useThreadChatSendMessage(
  thread?: Communication,
  onMessageSent?: (message: Communication) => void
): (message: string) => void {
  const medplum = useMedplum();
  const profile = useMedplumProfile();

  const sendMessage = useCallback(
    (message: string) => {
      if (!(profile && thread)) {
        return;
      }
      const profileRefStr = profile ? getReferenceString(profile) : undefined;
      medplum
        .createResource<Communication>({
          resourceType: 'Communication',
          status: 'in-progress',
          sender: createReference(profile),
          recipient: thread.recipient?.filter((ref) => getReferenceString(ref) !== profileRefStr) ?? [],
          sent: new Date().toISOString(),
          payload: [{ contentString: message }],
          partOf: [createReference(thread)],
        })
        .then((communication) => {
          onMessageSent?.(communication);
        })
        .catch(console.error);
    },
    [medplum, profile, thread, onMessageSent]
  );

  return sendMessage;
}
