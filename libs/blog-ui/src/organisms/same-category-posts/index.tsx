import React from 'react';
import { PostCard } from '../../molecules/post-card';
import { TAdminPost } from '@/database';

type TSameCategoryPostsProps = {
  category: string;
  posts: TAdminPost[];
};

const CLASSNAMES = {
  container: 'border-l border-gray-300 pl-4',
  header:
    'inline-block font-bold mb-4 capitalize pt-4 mb-4 border-b-2 border-[#2f6e91]',
  list: 'grid grid-cols-1 gap-y-4',
};

export const SameCategoryPosts: React.FC<Readonly<TSameCategoryPostsProps>> = ({
  category,
  posts,
}) => {
  return (
    <div className={CLASSNAMES.container}>
      <h4 className={CLASSNAMES.header}>Same category posts</h4>

      <ul className={CLASSNAMES.list}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            category={category}
            title={post.title}
            displayImage={post.category.image || ''}
          />
        ))}
      </ul>
    </div>
  );
};
