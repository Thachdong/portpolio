import React from 'react';
import { PostCard } from '../../molecules/post-card';

type TSameCategoryPostsProps = {
  group: string;
  category: string;
};

type TPost = { id: string; title: string; displayImage: string };

const MOCK_POSTS: TPost[] = [];

for (let i = 0; i < 8; i++) {
  MOCK_POSTS.push({
    id: 'post-' + i,
    title: 'Cấu trúc HTML5: Cách tạo template HTML5 đầu tiên - ' + i,
    displayImage: 'https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg',
  });
}

const CLASSNAMES = {
  container: 'border-l border-gray-300 pl-4',
  header:
    'inline-block font-bold mb-4 capitalize pt-4 mb-4 border-b-2 border-[#2f6e91]',
  list: 'grid grid-cols-1 gap-y-4',
};

export const SameCategoryPosts: React.FC<Readonly<TSameCategoryPostsProps>> = ({
  group,
  category,
}) => {
  return (
    <div className={CLASSNAMES.container}>
      <h4 className={CLASSNAMES.header}>Same category posts</h4>

      <ul className={CLASSNAMES.list}>
        {MOCK_POSTS.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            group={group}
            category={category}
            title={post.title}
            displayImage={post.displayImage}
          />
        ))}
      </ul>
    </div>
  );
};
