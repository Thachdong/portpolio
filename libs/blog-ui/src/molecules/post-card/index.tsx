import Link from 'next/link';
import React from 'react';

type TPostCardProps = {
  id: string;
  category: string;
  title: string;
  displayImage?: string;
};

const CLASSNAMES = {
  card: 'bg-soft-cream shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-deep-teal',
  title:
    'text-dark-jungle font-bold py-2 px-4 text-lg hover:text-burnt-orange transition-colors duration-300 truncate border-t border-deep-teal',
  imageContainer: 'flex justify-center items-center w-full h-48 bg-white',
  image:
    'max-w-full max-h-full object-cover hover:scale-105 transition-transform duration-300',
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
