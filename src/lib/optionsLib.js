// @flow
import {
  DEFAULT_TIMEOUT_BEFORE_REMOVE,
  DEFAULT_SHOW_DURATION,
} from './helper';

import styles from './index.scss';

import type { ToastOptionsType } from './types';

const ToastOptions: { [string]: ToastOptionsType } = {
  error: {
    toastClass: styles.error,
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
  notify: {
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
};

export default ToastOptions;
