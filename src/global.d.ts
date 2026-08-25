declare const VERSION: string;

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
