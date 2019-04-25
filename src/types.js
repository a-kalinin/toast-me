// @flow

export type ToastOptionsType = {
  position?: string,
  toastClass?: string,
  removedToastClass?: string,
  closeable?: boolean,
  showAll?: boolean,
  timeoutOnRemove?: number,
  duration?: number,
};

export type ToastActionType = {
  label: string,
  action: () => void,
  class?: string,
};
