// @flow

export type PositionType = 'top' | 'bottom';

export type ContainerType = 'chain' | 'over';

export type ContainerOptionsType = {
  position: PositionType,
  type: ContainerType,
};

export type ToastOptionsType = {
  position?: PositionType,
  type?: ContainerType,
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
