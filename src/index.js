// @flow
import ToastMeClass, { ToastOptions } from './toastMe';

import type { ToastActionType, ToastOptionsType } from './types';

export {
  ToastOptions,
  ToastMeClass,
};

export default function (
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new ToastMeClass(content, receivedOptions, action);
}
