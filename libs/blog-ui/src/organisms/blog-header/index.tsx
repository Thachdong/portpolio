import React, { Suspense } from 'react';
import { SearchBox } from '../../molecules';

const CLASSNAMES = {
  wrapper:
    'flex items-center w-full bg-gradient-to-r from-dark-jungle to-deep-teal shadow-lg',
  container:
    'relative w-full max-w-[1366px] mx-auto px-4 flex items-center justify-between',
  logo: 'text-3xl tracking-widest text-soft-cream font-light hover:text-lime-green transition-colors duration-300',
  searchBox: 'max-w-[475px] w-full ml-8',
};

export const BlogHeader: React.FC = () => {
  return (
    <div className={CLASSNAMES.wrapper}>
      <div className={CLASSNAMES.container}>
        <h1 className={CLASSNAMES.logo}>Dong.T</h1>
        <div className={CLASSNAMES.searchBox}>
          <Suspense
            fallback={<div className="w-full h-10 bg-gray-200 animate-pulse" />}
          >
            <SearchBox />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
