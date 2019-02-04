// @flow

export function setClass(node, classes: string) {
  const arr = classes.split(' ');
  arr.forEach(cls => node.classList.add(cls));
}

export const DEFAULT_TIMEOUT_BEFORE_REMOVE = 1000;
export const DEFAULT_SHOW_DURATION = 5000;
