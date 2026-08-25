import ToastMeClass, { ToastOptions, removeAllToasts } from './toastMe';

import type { ToastActionType, ToastOptionsType } from './types';

declare const VERSION: string;

export {
  ToastOptions,
  ToastMeClass,
  removeAllToasts,
};

export default function toast(
  content: string,
  receivedOptions: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
): ToastMeClass {
  return new ToastMeClass(content, receivedOptions, action);
}

(toast as any)._version = VERSION;
