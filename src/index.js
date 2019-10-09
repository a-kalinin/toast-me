// @flow
import ToastMeClass, { ToastOptions, removeAllToasts } from './toastMe';

import type { ToastActionType, ToastOptionsType } from './types';

export {
  ToastOptions,
  ToastMeClass,
  removeAllToasts,
};

export default function (
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new ToastMeClass(content, receivedOptions, action);
}
