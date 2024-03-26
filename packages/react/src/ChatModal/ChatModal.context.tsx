import { Communication } from '@medplum/fhirtypes';
import { createContext } from 'react';

export const ChatModalContext = createContext<{
  onMessageSent?: (message: string) => void;
  onMessageReceived?: (message: Communication) => void;
}>({});
