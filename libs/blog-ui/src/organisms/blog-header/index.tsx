import React from 'react';
import { SearchBox } from '../../molecules';

const CLASSNAMES = {
  wrapper: 'bg-[#2f6e91] py-4',
  container: 'relative max-w-[1366px] mx-auto flex items-center gap-x-4',
  logo: 'absolute text-2xl tracking-widest text-white font-light',
  searchBox: 'flex-grow max-w-[475px] mx-auto',
};

export const BlogHeader: React.FC = () => {
  return (
    <div className={CLASSNAMES.wrapper}>
      <div className={CLASSNAMES.container}>
        <h1 className={CLASSNAMES.logo}>Dong.T</h1>
        <div className={CLASSNAMES.searchBox}>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};
