import React from 'react';
import { PostCard } from '../../molecules/post-card';
import Link from 'next/link';

type TPostListProps = {
  group: string;
  category: string;
  posts: {
    id: string;
    displayImage: string;
    title: string;
  }[];
};

const CLASSNAMES = {
  header: 'flex justify-between items-center mb-4 border-b-2 border-[#2f6e91]',
  headerText: 'font-bold text-xl',
  headerLink: 'text-[#2f6e91]',
  list: 'grid grid-cols-4 gap-4 mb-8',
};

export const PostList: React.FC<Readonly<TPostListProps>> = ({
  group,
  category,
  posts,
}) => {
  return (
    <>
      <div className={CLASSNAMES.header} id={category}>
        <h4 id={group} className={CLASSNAMES.headerText}>
          {group} / {category}
        </h4>
        <Link className={CLASSNAMES.headerLink} href={`/blog/${category}`}>
          View All
        </Link>
      </div>

      <ul className={CLASSNAMES.list}>
        {posts.map((post) => (
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
    </>
  );
};
