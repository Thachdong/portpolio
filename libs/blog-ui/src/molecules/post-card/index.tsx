import React from 'react';

type TPostCardProps = {
  id: string;
  group: string;
  category: string;
  title: string;
  displayImage?: string;
};

const CLASSNAMES = {
  card: 'border border-gray-300 rounded',
  title: 'text-center border-t border-gray-300',
};

export const PostCard: React.FC<Readonly<TPostCardProps>> = ({ ...post }) => {
  return (
    <li className={CLASSNAMES.card} key={post.id}>
      <img src={post.displayImage} alt={post.title} />
      <p className={CLASSNAMES.title}>{post.title}</p>
    </li>
  );
};
