import React from 'react';

type TSameCategoryPostsProps = {};

const CLASSNAMES = {
  container: 'border-l border-gray-300 pl-4',
  header: 'font-bold mb-4 capitalize',
};

export const SameCategoryPosts: React.FC<
  Readonly<TSameCategoryPostsProps>
> = () => {
  return (
    <div className={CLASSNAMES.container}>
      <h4 className={CLASSNAMES.header}>Same category posts</h4>
    </div>
  );
};
