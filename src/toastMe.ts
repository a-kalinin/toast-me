import ToastOptions, { DEFAULT_TIMEOUT_BEFORE_REMOVE, DEFAULT_SHOW_DURATION } from './optionsLib';
import { setClass } from './helper';
import styles from './ToastMe.scss';

import type { ToastActionType, ToastOptionsType, ContainerOptionsType } from './types';

export default class ToastMeClass {
  options: ToastOptionsType;
  content: string;
  domNode!: Element;
  timerShow?: ReturnType<typeof setTimeout>;

  static getContainer({
    position = 'top',
    type = 'over',
    containerClass = '',
    useUniqueContainer = false,
  }: ContainerOptionsType): Element {
    const positionClass = position === 'bottom' ? (styles as any).bottom : (styles as any).top;
    const typeClass = type === 'chain' ? (styles as any).chain : (styles as any).over;
    const selector = `.${(styles as any).container}.${positionClass}.${typeClass}`;

    let node = useUniqueContainer ? null : document.querySelector(selector);
    if (!node) {
      node = document.createElement('div');
      document.body.appendChild(node);
    } else {
      node.className = '';
    }
    setClass(node as Element, [(styles as any).container, positionClass, typeClass, containerClass]);
    return node as Element;
  }

  static removeAll(options: ContainerOptionsType): void {
    const node = ToastMeClass.getContainer(options);
    const closeButtons = node.querySelectorAll(`.${(styles as any).close}`);
    for (let i = 0, l = closeButtons.length; i < l; i += 1) {
      (closeButtons[i] as HTMLElement).click();
    }
  }

  /**
   * @param content {String} - text to show
   * @param receivedOptions {Object} - options object
   * @param action {Object} - actions object
   */
  constructor(
    content: string,
    receivedOptions: null | ToastOptionsType | 'error' | 'notify' = 'notify',
    action?: ToastActionType,
  ) {
    let options: ToastOptionsType = { ...ToastOptions.default };
    if (typeof receivedOptions === 'string' && (ToastOptions as any)[receivedOptions]) {
      options = { ...options, ...(ToastOptions as any)[receivedOptions] };
    } else if (typeof receivedOptions === 'object' && receivedOptions !== null) {
      options = { ...options, ...receivedOptions };
    }

    if (options.type === 'over') ToastMeClass.removeAll(options as ContainerOptionsType);

    this.options = options;
    this.content = content;
    this.domNode = this.createToastNode(action);
    ToastMeClass
      .getContainer(options as ContainerOptionsType)
      .appendChild(this.domNode);
    this.startTimer();
  }

  createToastNode(action?: ToastActionType): Element {
    const node = document.createElement('div');
    setClass(node, (styles as any).toast);

    const messageNode = document.createElement('div');
    setClass(messageNode, (styles as any).message);
    if (this.options.useUnsafeHtmlContent) {
      messageNode.innerHTML = this.content;
      node.appendChild(messageNode);
    } else {
      messageNode.textContent = this.content;
      node.appendChild(messageNode);
      node.title = this.content;
    }

    setClass(node, [this.options.toastClass as string]);

    if (action) {
      const actionNode = document.createElement('button');
      setClass(actionNode, [(styles as any).action, (styles as any).button, action.class as string]);
      actionNode.title = action.label;
      actionNode.textContent = action.label;
      actionNode.addEventListener('click', () => {
        action.action();
        this.close();
      });
      node.appendChild(actionNode);
    }

    const closeNode = document.createElement('button');
    setClass(closeNode, [
      (styles as any).close,
      (styles as any).button,
      !this.options.closeable && (styles as any).hidden,
    ]);
    closeNode.title = 'Close';
    closeNode.addEventListener('click', () => this.close());
    node.appendChild(closeNode);

    node.addEventListener('mouseenter', () => this.stopTimer());
    node.addEventListener('mouseleave', () => this.startTimer());

    return node;
  }

  close(): void {
    this.stopTimer();
    if (!this.domNode) return;

    setClass(this.domNode, [(styles as any).remove, this.options.removedToastClass as string]);

    setTimeout(
      () => { this.domNode.remove(); },
      this.options.timeoutOnRemove || DEFAULT_TIMEOUT_BEFORE_REMOVE,
    );
  }

  startTimer(): void {
    this.stopTimer();
    this.timerShow = setTimeout(
      () => this.close(),
      this.options.duration || DEFAULT_SHOW_DURATION,
    );
  }

  stopTimer(): void {
    clearTimeout(this.timerShow);
  }
}

function removeAllToasts(options: ContainerOptionsType): void {
  ToastMeClass.removeAll(options);
}

export {
  ToastOptions,
  removeAllToasts,
};
