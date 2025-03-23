import React from 'react';
import { PostList } from '../../organisms';

type TPostGroupProps = {};

type TPost = { id: string; title: string; displayImage: string };

const MOCK_POSTS: TPost[] = [];

for (let i = 0; i < 8; i++) {
  MOCK_POSTS.push({
    id: 'post-' + i,
    title: 'Cấu trúc HTML5: Cách tạo template HTML5 đầu tiên - ' + i,
    displayImage: 'https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg',
  });
}

const MOCK_DATA: {
  id: string;
  name: string;
  category: string;
  posts: TPost[];
}[] = [];

for (let i = 0; i < 5; i++) {
  MOCK_DATA.push({
    id: 'group-' + i,
    name: 'Group ' + i,
    category: 'Category ' + i,
    posts: MOCK_POSTS,
  });
}

const CLASSNAMES = {
  container: 'py-4 px-2 overflow-y-auto',
};

export const PostGroup: React.FC<Readonly<TPostGroupProps>> = () => {
  return (
    <div
      className={CLASSNAMES.container}
      style={{ height: 'calc(100vh - 74px)' }}
    >
      {MOCK_DATA.map((data) => (
        <PostList
          group={data.name}
          category={data.category}
          posts={data.posts}
        />
      ))}
    </div>
  );
};
