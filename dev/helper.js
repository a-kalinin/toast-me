// @flow
export const createNode = (node: string | Element) => new CustomNode(node);

export class CustomNode {
  constructor(node: string | Node) {
    if(typeof node === 'string') {
      this.node = document.createElement(node);
    } else if (node instanceof Element || node instanceof HTMLDocument) {
      this.node = node;
    } else {
      throw new Error('Wrong argument passed to CustomNode constructor');
    }
  }

  class(className: string) {
    this.node.className = className;
    return this;
  }

  on(eventName: string, callback: Function) {
    this.node.addEventListener(eventName, callback);
    return this;
  }

  off(eventName: string, callback: Function) {
    this.node.removeEventListener(eventName, callback);
    return this;
  }

  putInto(container: Node) {
    container.appendChild(this.node);
    return this;
  }

  putIntoDoc() {
    document.body.appendChild(this.node);
    return this;
  }

  html(html: string) {
    this.node.innerHTML = html;
    return this;
  }

  attr(list: {[string]: string}) {
    Object.keys(list).forEach(key => this.node[key] = list[key]);
    return this;
  }
}