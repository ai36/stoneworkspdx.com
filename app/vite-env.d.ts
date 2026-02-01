/// <reference types="vite/client" />

declare module "*.css?url" {
  const href: string;
  export default href;
}

declare module "*.jpg?url" {
  const href: string;
  export default href;
}