// @flow
import ToastOptions, { DEFAULT_TIMEOUT_BEFORE_REMOVE, DEFAULT_SHOW_DURATION } from './optionsLib';
import { setClass } from './helper';
import styles from './index.scss';

import type { ToastActionType, ToastOptionsType } from './types';

export default class ToastMeClass {
  static getContainer(position): Element {
    const onBottom = position === 'bottom';
    const selector = `.${styles.container}.${onBottom ? styles.bottom : styles.top}`;
    let node = document.querySelector(selector);
    if (!node) {
      node = document.createElement('div');
      setClass(node, [styles.container, onBottom ? styles.bottom : styles.top]);
      document.body.appendChild(node);
    }
    return node;
  }

  static removeAll(position) {
    const node = ToastMeClass.getContainer(position);
    const closeButtons = node.querySelectorAll(`.${styles.close}`);
    for (let i = 0, l = closeButtons.length; i < l; i += 1) {
      closeButtons[i].click();
    }
  }

  /**
   * @param content {String} - text to show
   * @param receivedOptions {Object} - options object
   * @param action {Object} - actions object
   */
  constructor(
    content: string,
    receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
    action?: ToastActionType,
  ) {
    let options = { ...ToastOptions.default };
    if (typeof receivedOptions === 'string' && ToastOptions[receivedOptions]) {
      options = { ...options, ...ToastOptions[receivedOptions] };
    } else if (typeof receivedOptions === 'object') {
      options = { ...options, ...receivedOptions };
    }

    ToastMeClass.removeAll(options.position);

    this.options = options;
    this.content = content;
    this.domNode = this.createToastNode(action);
    ToastMeClass
      .getContainer(options.position)
      .appendChild(this.domNode);
    this.startTimer();
  }

  options: ToastOptionsType;

  content: string;

  domNode: Element;

  createToastNode(action?: ToastActionType) {
    const node = document.createElement('div');
    setClass(node, styles.toast);

    const messageNode = document.createElement('div');
    setClass(messageNode, styles.message);
    messageNode.textContent = this.content;
    node.appendChild(messageNode);
    node.title = this.content;

    setClass(node, [
      this.options.toastClass,
      this.options.position === 'bottom' && styles.toastBottom,
    ]);

    if (action) {
      const actionNode = document.createElement('button');
      setClass(actionNode, [styles.action, styles.button, action.class]);
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
      styles.close,
      styles.button,
      !this.options.closeable && styles.hidden,
    ]);
    closeNode.title = 'Close';
    closeNode.addEventListener('click', () => this.close());
    node.appendChild(closeNode);

    node.addEventListener('mouseenter', () => this.stopTimer());
    node.addEventListener('mouseleave', () => this.startTimer());

    return node;
  }

  close() {
    this.stopTimer();
    if (!this.domNode) return;

    setClass(this.domNode, [styles.remove, this.options.removedToastClass]);

    setTimeout(
      () => { this.domNode.remove(); },
      this.options.timeoutOnRemove || DEFAULT_TIMEOUT_BEFORE_REMOVE,
    );
  }

  startTimer() {
    this.stopTimer();
    this.timerShow = setTimeout(
      () => this.close(),
      this.options.duration || DEFAULT_SHOW_DURATION,
    );
  }

  stopTimer() {
    clearTimeout(this.timerShow);
  }
}

export { ToastOptions };