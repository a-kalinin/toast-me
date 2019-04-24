// @flow
export const DEFAULT_TIMEOUT_BEFORE_REMOVE = 1000;
export const DEFAULT_SHOW_DURATION = 5000;

import styles from './index.scss';

import type { ToastOptionsType } from './types';

const ToastOptions: { [string]: ToastOptionsType } = {
  default: {
    position: 'top',
    toastClass: '',
    removedToastClass: '',
    closeable: true,
    // showAll: false,
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
  error: {
    toastClass: styles.error,
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
};

export default ToastOptions;
