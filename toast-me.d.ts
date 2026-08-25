import ToastMeClass from './src/toastMe';
import { ToastActionType, ToastOptionsType } from './src/types';

declare function toast(
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify',
  action?: ToastActionType
): ToastMeClass;

export default toast;
export { ToastMeClass, ToastActionType, ToastOptionsType };
export * from './src/types';
