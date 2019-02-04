// @flow
import ToastMe from './toastMe';
import options from './optionsLib';

import type { ToastActionType, ToastOptionsType } from './types';

export {
  options,
};

export default function (
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new ToastMe(content, receivedOptions, action);
}
