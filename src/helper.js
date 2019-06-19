// @flow

export function setClass(node: Element, classes: string | Array<string>) {
  const arr = Array.isArray(classes) ? classes : classes.split(' ');
  arr.forEach(cls => cls && node.classList.add(cls));
}
