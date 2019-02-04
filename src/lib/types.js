// @flow

export type ToastOptionsType = {
  position?: string,
  toastClass?: string,
  removedToastClass?: string,
  closeable?: boolean,
  showAll?: boolean,
  timeoutOnRemove?: number,
  showDuration?: number,
};

export type ToastActionType = {
  name: string,
  action: () => void,
  class?: string,
};
