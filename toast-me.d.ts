import { ToastMeClass } from './src';
import { ToastActionType, ToastOptionsType } from './src/types';

declare module 'toast-me' {
  export default function toast(
    content: string,
    receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
    action?: ToastActionType
  ): ToastMeClass
}