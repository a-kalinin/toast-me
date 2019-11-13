// @flow

export function arrayFlat(array: Array<any>) {
  return array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? arrayFlat(val) : val),
    []
  );
}

export function setClass(node: Element, classes: string | Array<string>) {
  const arr = Array.isArray(classes)
    ? arrayFlat(classes.map(el => el && el.split(' ')))
    : classes.split(' ');
  arr.forEach(cls => cls && node.classList.add(cls));
}
