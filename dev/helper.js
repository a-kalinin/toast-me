export const createNode = (node) => new CustomNode(node);

export class CustomNode {
  constructor(node) {
    if(typeof node === 'string') {
      this.node = document.createElement(node);
    } else if (node instanceof Element) {
      this.node = node;
    } else {
      throw new Error('Wrong argument passed to CustomNode constructor');
    }
  }

  class(className) {
    this.node.className = className;
    return this;
  }

  on(eventName, callback) {
    this.node.addEventListener(eventName, callback);
    return this;
  }

  off(eventName, callback) {
    this.node.removeEventListener(eventName, callback);
    return this;
  }

  putInto(container) {
    container.appendChild(this.node);
    return this;
  }

  putIntoDoc() {
    if (!document.body) {
      throw new Error('Inaccessible context. This code should run in browser.');
    }
    document.body.appendChild(this.node);
    return this;
  }

  html(html) {
    this.node.innerHTML = html;
    return this;
  }

  attr(list) {
    Object.keys(list).forEach(key => this.node.setAttribute(key,list[key]));
    return this;
  }
}
