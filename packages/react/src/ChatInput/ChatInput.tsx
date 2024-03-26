import { ActionIcon, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useCallback, useContext, useRef } from 'react';
import { ChatModalContext } from '../ChatModal/ChatModal.context';
import { Form } from '../Form/Form';

export interface ChatInputProps {
  readonly sendMessage: (content: string) => void;
}

export function ChatInput(props: ChatInputProps): JSX.Element | null {
  const { sendMessage } = props;
  const ctx = useContext(ChatModalContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessageInternal = useCallback(
    (formData: Record<string, string>) => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      const msg = formData.message;
      sendMessage(msg);
      console.log(ctx);
      ctx.onMessageSent?.(msg);
    },
    [ctx, sendMessage]
  );

  return (
    <Form onSubmit={sendMessageInternal}>
      <TextInput
        ref={inputRef}
        name="message"
        placeholder="Type a message..."
        radius="xl"
        rightSectionWidth={42}
        rightSection={
          <ActionIcon type="submit" size="1.5rem" radius="xl" color="blue" variant="filled" aria-label="Send message">
            <IconArrowRight size="1rem" stroke={1.5} />
          </ActionIcon>
        }
      />
    </Form>
  );
}
