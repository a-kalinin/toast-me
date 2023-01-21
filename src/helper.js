// @flow

export function arrayFlat(array: Array<any>) {
  return array.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? arrayFlat(val) : val),
    []
  );
}

function splitClasses(classes: string | undefined): string[] {
  if (!classes) {
    return [];
  }
  return classes.split(' ');
}

export function setClass(node: Element, classes: string | Array<string>) {
  const arr = Array.isArray(classes)
    ? arrayFlat(classes.map(splitClasses))
    : splitClasses(classes);
  arr.forEach(cls => cls && node.classList.add(cls));
}
