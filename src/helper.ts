export function arrayFlat(array: any[]): any[] {
  return array.reduce(
    (acc: any[], val: any) => acc.concat(Array.isArray(val) ? arrayFlat(val) : val),
    []
  );
}

function splitClasses(classes: string | undefined): string[] {
  if (!classes) {
    return [];
  }
  return classes.split(' ');
}

export function setClass(node: Element, classes: string | Array<string | false | undefined | null>): void {
  const arr = Array.isArray(classes)
    ? arrayFlat((classes as any[]).map(splitClasses))
    : splitClasses(classes as string);
  arr.forEach((cls: string) => cls && node.classList.add(cls));
}
