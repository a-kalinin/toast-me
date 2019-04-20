// @flow
import ToastMe from './toastMe';
import getOptions from './optionsLib';

import type { ToastActionType, ToastOptionsType } from './types';

// export {
//   getOptions,
// };

export default function (
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new ToastMe(content, receivedOptions, action);
}
