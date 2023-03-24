import { ToastMeClass } from './src';
import { ToastActionType, ToastOptionsType } from './src/types';

declare module 'toast-me' {
  export function toast(
    content: string,
    receivedOptions: undefined | null | ToastOptionsType | 'error' | 'notify' = 'notify',
    action: undefined | ToastActionType
  ): ToastMeClass
}