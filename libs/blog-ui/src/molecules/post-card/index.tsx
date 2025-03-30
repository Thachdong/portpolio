import Link from 'next/link';
import React from 'react';

type TPostCardProps = {
  id: string;
  category: string;
  title: string;
  displayImage?: string;
};

const CLASSNAMES = {
  card: 'border border-gray-300 rounded',
  title: 'text-center border-t border-gray-300',
  imageContainer: 'flex justify-center items-center w-full h-48',
  image: 'max-w-full max-h-full',
};

export const PostCard: React.FC<Readonly<TPostCardProps>> = ({ ...post }) => {
  return (
    <li className={CLASSNAMES.card} key={post.id}>
      <Link href={`/blog/${post.category}/${post.id}`}>
        <div className={CLASSNAMES.imageContainer}>
          <img
            className={CLASSNAMES.image}
            src={post.displayImage}
            alt={post.title}
          />
        </div>

        <p className={CLASSNAMES.title}>{post.title}</p>
      </Link>
    </li>
  );
};
