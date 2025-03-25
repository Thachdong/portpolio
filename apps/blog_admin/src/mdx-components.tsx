/* eslint-disable @nx/enforce-module-boundaries */
import { markdownComponents } from '../../../libs/utilities/src/markdown-components.utilities';

declare global {
  type MDXProvidedComponents = typeof markdownComponents;
}

export function useMDXComponents(): MDXProvidedComponents {
  return markdownComponents;
}
