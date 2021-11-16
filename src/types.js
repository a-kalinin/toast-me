// @flow

export type PositionType = 'top' | 'bottom';

export type ContainerType = 'chain' | 'over';

export type ContainerOptionsType = {
  position: PositionType,
  type: ContainerType,
  containerClass?: string,
  useUniqueContainer?: boolean,
};

export type ToastOptionsType = {
  position?: PositionType,
  type?: ContainerType,
  toastClass?: string,
  removedToastClass?: string,
  containerClass?: string,
  useUniqueContainer?: boolean,
  useUnsafeHtmlContent?: boolean,
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
