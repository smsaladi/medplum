import { ActionIcon, Paper, ScrollArea, Title } from '@mantine/core';
import { IconChevronDown, IconMessage } from '@tabler/icons-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChatModalContext } from './ChatModal.context';
import classes from './ChatModal.module.css';

export interface ChatModalProps {
  readonly title: string;
  readonly children: React.ReactNode;
  readonly open?: boolean;
  readonly input?: React.ReactNode;
}

export function ChatModal(props: ChatModalProps): JSX.Element | null {
  const { title, children, open, input } = props;
  const [opened, setOpened] = useState(open ?? false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const scrollToBottomRef = useRef<boolean>(true);
  const [renderCount, setRenderCount] = useState(0);

  const triggerScrollToBottom = useCallback(() => {
    scrollToBottomRef.current = true;
    // We use this as a way to trigger a re-render
    setRenderCount((s) => s + 1);
  }, []);

  const [context, setContext] = useState({
    onMessageSent: triggerScrollToBottom,
    onMessageReceived: triggerScrollToBottom,
  });

  useEffect(() => {
    setContext({
      onMessageSent: triggerScrollToBottom,
      onMessageReceived: triggerScrollToBottom,
    });
  }, [triggerScrollToBottom]);

  useEffect(() => {
    setOpened((prevVal) => open ?? prevVal);
  }, [open]);

  useEffect(() => {
    console.log({ renderCount });
  }, [renderCount]);

  useEffect(() => {
    if (scrollToBottomRef.current) {
      console.log('SCROLLING TO BOTTOM');
      console.log('scrollAreaRef', scrollAreaRef.current);
      if (scrollAreaRef.current?.scrollTo) {
        console.log('scrollHeight', scrollAreaRef.current.scrollHeight);
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        scrollToBottomRef.current = false;
      }
    }
  });

  useEffect(() => {
    console.log('other scrollHeight', scrollAreaRef.current?.scrollHeight);
  });

  if (!opened) {
    return (
      <div className={classes.iconContainer}>
        <ActionIcon
          className={classes.icon}
          color="blue"
          size="lg"
          radius="xl"
          variant="outline"
          onClick={() => {
            setOpened(true);
            triggerScrollToBottom();
          }}
          aria-label="Open chat"
        >
          <IconMessage size="1.625rem" />
        </ActionIcon>
      </div>
    );
  }

  return (
    <ChatModalContext.Provider value={context}>
      <div className={classes.chatContainer}>
        <Paper className={classes.chatPaper} shadow="xl" p={0} radius="md" withBorder>
          <Title order={2} className={classes.chatTitle}>
            {title}
          </Title>
          <div className={classes.chatBody}>
            <ScrollArea viewportRef={scrollAreaRef} className={classes.chatScrollArea} w={400} h={360}>
              {children}
            </ScrollArea>
          </div>
          <div className={classes.chatInputContainer}>{input ?? null}</div>
        </Paper>
      </div>
      <div className={classes.iconContainer}>
        <ActionIcon
          className={classes.icon}
          color="blue"
          size="lg"
          radius="xl"
          variant="outline"
          onClick={() => setOpened(false)}
          aria-label="Close chat"
        >
          <IconChevronDown size="1.625rem" />
        </ActionIcon>
      </div>
    </ChatModalContext.Provider>
  );
}
