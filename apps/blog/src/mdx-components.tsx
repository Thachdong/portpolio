import { markdownComponents } from '@/utility';

declare global {
  type MDXProvidedComponents = typeof markdownComponents;
}

export function useMDXComponents(): MDXProvidedComponents {
  return markdownComponents;
}
