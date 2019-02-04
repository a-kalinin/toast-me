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

const SALT = 'jkgRhtT46rx2hgfMDjH';

function salted(text) { return `${text}--${SALT}`; }

function setClass(node, classes) {
  const arr = classes.split(' ');
  arr.forEach(cls => node.classList.add(cls));
}


const CONTAINER_ID = salted('toast-ui-container');

const DEFAULT_TIMEOUT_BEFORE_REMOVE = 1000;
const DEFAULT_SHOW_DURATION = 5000;

export const ToastOptions: { [string]: ToastOptionsType } = {
  error: {
    toastClass: salted('error'),
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
  notify: {
    timeoutOnRemove: DEFAULT_TIMEOUT_BEFORE_REMOVE,
    showDuration: DEFAULT_SHOW_DURATION,
  },
};


class Toast {
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
    Toast.removeAll();

    const options = typeof receivedOptions === 'string'
      ? ToastOptions[receivedOptions]
      : receivedOptions;

    this.options = options || {};
    this.content = content;
    this.container = Toast.getContainer();
    this.domNode = this.createToastNode(action);
    this.container.appendChild(this.domNode);
    this.startTimer();
  }

  createToastNode(action?: ToastActionType) {
    const node = document.createElement('div');
    setClass(node, salted('toast'));

    const messageNode = document.createElement('div');
    setClass(messageNode, salted('message'));
    messageNode.textContent = this.content;
    node.appendChild(messageNode);
    node.title = this.content;

    if (this.options && this.options.toastClass) {
      setClass(node, this.options.toastClass);
    }

    if (action) {
      const actionNode = document.createElement('button');
      setClass(actionNode, salted('action'));
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
    setClass(closeNode, salted('close'));
    if (this.options && this.options.closeable) {
      setClass(closeNode, salted('hidden'));
    }
    closeNode.title = 'Close';
    closeNode.addEventListener('click', () => this.close());
    node.appendChild(closeNode);

    node.addEventListener('mouseenter', () => this.stopTimer());
    node.addEventListener('mouseleave', () => this.startTimer());

    return node;
  }

  static getContainer() {
    let node = document.getElementById(CONTAINER_ID);
    if (!node) {
      node = document.createElement('div');
      node.id = CONTAINER_ID;
      document.body.appendChild(node);
    }
    return node;
  }

  static removeAll() {
    const container = Toast.getContainer();
    const closeButtons = container.querySelectorAll(`.${salted('close')}`);
    for (let i = 0, l = closeButtons.length; i < l; i += 1) {
      closeButtons[i].click();
    }
  }

  close() {
    this.stopTimer();
    if (!this.domNode) return;

    setClass(this.domNode, salted('remove'));
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
  content: string,
  receivedOptions?: null | ToastOptionsType | 'error' | 'notify' = 'notify',
  action?: ToastActionType,
) {
  return new Toast(content, receivedOptions, action);
}
