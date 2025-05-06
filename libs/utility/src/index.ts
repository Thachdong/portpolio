export * from './markdown/markdown-components';
export * from './validators/post';
export * from './constant';
export * from './types';

export const debounce = (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};
