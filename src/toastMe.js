// @flow
import ToastOptions from './optionsLib';
import {
  setClass,
  DEFAULT_TIMEOUT_BEFORE_REMOVE,
  DEFAULT_SHOW_DURATION,
} from './helper';
import styles from './index.scss';

import type { ToastActionType, ToastOptionsType } from './types';

class ToastMeClass {
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
    ToastMeClass.removeAll();

    const options = typeof receivedOptions === 'string'
      ? ToastOptions()[receivedOptions]
      : receivedOptions;

    this.options = options || {};
    this.content = content;
    this.container = ToastMeClass.getContainer();
    this.domNode = this.createToastNode(action);
    this.container.appendChild(this.domNode);
    this.startTimer();
  }

  options: ToastOptionsType;

  content: string;

  container: Element;

  domNode: Element;

  createToastNode(action?: ToastActionType) {
    const node = document.createElement('div');
    setClass(node, styles.toast);

    const messageNode = document.createElement('div');
    setClass(messageNode, styles.message);
    messageNode.textContent = this.content;
    node.appendChild(messageNode);
    node.title = this.content;

    if (this.options && this.options.toastClass) {
      setClass(node, this.options.toastClass);
    }

    if (action) {
      const actionNode = document.createElement('button');
      setClass(actionNode, styles.action);
      if (action.class) {
        setClass(actionNode, action.class);
      }
      actionNode.textContent = action.name;
      actionNode.addEventListener('click', () => {
        action.action();
        this.close();
      });
      actionNode.title = action.name;
      node.appendChild(actionNode);
    }

    const closeNode = document.createElement('button');
    setClass(closeNode, styles.close);
    if (this.options && this.options.closeable) {
      setClass(closeNode, styles.hidden);
    }
    closeNode.title = 'Close';
    closeNode.addEventListener('click', () => this.close());
    node.appendChild(closeNode);

    node.addEventListener('mouseenter', () => this.stopTimer());
    node.addEventListener('mouseleave', () => this.startTimer());

    return node;
  }

  static getContainer(): Element {
    // eslint-disable-next-line prefer-template
    let node = document.querySelector('.' + styles.container);
    if (!node) {
      node = document.createElement('div');
      node.classList.add(styles.container);
      document.body.appendChild(node);
    }
    return node;
  }

  static removeAll() {
    const node = ToastMeClass.getContainer();
    // eslint-disable-next-line prefer-template
    const closeButtons = node.querySelectorAll('.' + styles.close);
    for (let i = 0, l = closeButtons.length; i < l; i += 1) {
      closeButtons[i].click();
    }
  }

  close() {
    this.stopTimer();
    if (!this.domNode) return;

    setClass(this.domNode, styles.remove);
    if (this.options.removedToastClass) {
      setClass(this.domNode, this.options.removedToastClass);
    }

    setTimeout(
      () => { this.domNode.remove(); },
      this.options.timeoutOnRemove || DEFAULT_TIMEOUT_BEFORE_REMOVE,
    );
  }

  startTimer() {
    this.timerShow = setTimeout(
      () => this.close(),
      this.options.showDuration || DEFAULT_SHOW_DURATION,
    );
  }

  stopTimer() {
    clearTimeout(this.timerShow);
  }
}

export default function (
  content,
  receivedOptions,
  action,
) {
  return new ToastMeClass(content, receivedOptions, action);
};
export { ToastOptions };