import { TAdminPost } from '@/database';
import { IPaginationResponse } from '@/utility';
import Link from 'next/link';
import React from 'react';
import { Pagination } from '../pagination';

type TPostListProps = {
  pagination: IPaginationResponse<TAdminPost>;
};

const CLASSNAMES = {
  wrapper: 'p-6 bg-white shadow-md rounded-lg',
  heading: 'text-3xl font-bold mb-6 text-gray-800',
  total: 'text-gray-700',
  totalCount: 'font-semibold text-gray-900',
  table: 'w-full border-collapse border border-gray-500', // Updated border color
  thead: 'bg-gray-200',
  tr: 'hover:bg-gray-100',
  td: 'border p-3 border-gray-500',
  button:
    'bg-burnt-orange text-soft-cream px-4 py-2 rounded-md hover:bg-deep-teal transition',
  link: 'bg-lime-green text-soft-cream px-4 py-2 rounded-md hover:bg-dark-jungle hover:text-soft-cream transition inline-block ml-2',
  totalWrapper:
    'flex justify-between items-center mb-6 bg-gray-100 border border-gray-300 rounded-lg px-4',
  pagination: 'flex gap-4',
};

export const PostsList: React.FC<TPostListProps> = ({ pagination }) => {
  const { data: posts, total, page, limit } = pagination;
  return (
    <div className={CLASSNAMES.wrapper}>
      <h1 className={CLASSNAMES.heading}>Posts List</h1>

      <div className={CLASSNAMES.totalWrapper}>
        <div className={CLASSNAMES.total}>
          <p className={CLASSNAMES.total}>
            Total: <span className={CLASSNAMES.totalCount}>{total}</span>
          </p>
        </div>
        <div className={CLASSNAMES.pagination}>
          <Pagination
            total={total}
            page={page}
            limit={limit}
            path="/blog_admin/posts"
          />
        </div>
        <div className={CLASSNAMES.total}>
          <p className={CLASSNAMES.total}>
            Items per page:{' '}
            <span className={CLASSNAMES.totalCount}>{limit}</span>
          </p>
        </div>
      </div>

      <table className={CLASSNAMES.table}>
        <thead className={CLASSNAMES.thead}>
          <tr>
            <th className={CLASSNAMES.td}>Title</th>
            <th className={CLASSNAMES.td}>Status</th>
            <th className={CLASSNAMES.td}>Author</th>
            <th className={CLASSNAMES.td}>Category Group</th>
            <th className={CLASSNAMES.td}>Category</th>
            <th className={CLASSNAMES.td}>Created At</th>
            <th className={CLASSNAMES.td}>Updated At</th>
            <th className={CLASSNAMES.td}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className={CLASSNAMES.tr}>
              <td className={CLASSNAMES.td}>{post.title}</td>
              <td className={CLASSNAMES.td}>{post.status}</td>
              <td className={CLASSNAMES.td}>{post.author.name}</td>
              <td className={CLASSNAMES.td}>
                {post.category.categoryGroup.name}
              </td>
              <td className={CLASSNAMES.td}>{post.category.name}</td>
              <td className={CLASSNAMES.td}>
                {new Date(post.createdAt).toLocaleDateString()}
              </td>
              <td className={CLASSNAMES.td}>
                {new Date(post.updatedAt).toLocaleDateString()}
              </td>
              <td className={CLASSNAMES.td}>
                <button className={CLASSNAMES.button}>Edit</button>
                <Link
                  target="_blank"
                  className={CLASSNAMES.link}
                  href={`/blog/${post.category.id}/${post.id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
