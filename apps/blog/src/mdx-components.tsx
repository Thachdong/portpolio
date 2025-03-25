import { markdownComponents } from '@my-portpolio/utilities';

declare global {
  type MDXProvidedComponents = typeof markdownComponents;
}

export function useMDXComponents(): MDXProvidedComponents {
  return markdownComponents;
}
