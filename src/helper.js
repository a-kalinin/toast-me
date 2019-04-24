// @flow

export function setClass(node, classes: string) {
  const arr = classes.split(' ');
  arr.forEach(cls => node.classList.add(cls));
}
