// @flow
import ToastMe from './toastMe';
import ToastOptions from './optionsLib';

import type { ToastActionType, ToastOptionsType } from './types';

export {
  ToastOptions,
};

export default function (
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new ToastMe(content, receivedOptions, action);
}
