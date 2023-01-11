// @flow
export const createNode = (node: string | Element): CustomNode => new CustomNode(node);

export class CustomNode {
  node: Element;

  constructor(node: string | Element) {
    if(typeof node === 'string') {
      this.node = document.createElement(node);
    } else if (node instanceof Element) {
      this.node = node;
    } else {
      throw new Error('Wrong argument passed to CustomNode constructor');
    }
  }

  class(className: string): CustomNode {
    this.node.className = className;
    return this;
  }

  on(eventName: string, callback: Function): CustomNode {
    this.node.addEventListener(eventName, callback);
    return this;
  }

  off(eventName: string, callback: Function): CustomNode {
    this.node.removeEventListener(eventName, callback);
    return this;
  }

  putInto(container: Node): CustomNode {
    container.appendChild(this.node);
    return this;
  }

  putIntoDoc(): CustomNode {
    if (!document.body) {
      throw new Error('Inaccessible context. This code should run in browser.');
    }
    document.body.appendChild(this.node);
    return this;
  }

  html(html: string): CustomNode {
    this.node.innerHTML = html;
    return this;
  }

  attr(list: {[string]: string}): CustomNode {
    Object.keys(list).forEach(key => this.node.setAttribute(key,list[key]));
    return this;
  }
}
