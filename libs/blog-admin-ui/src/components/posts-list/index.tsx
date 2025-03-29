import { TAdminPost } from '@/database';
import { IPaginationResponse } from '@/utility';
import Link from 'next/link';
import React from 'react';
import { Pagination } from '../pagination';

type TPostListProps = {
  pagination: IPaginationResponse<TAdminPost>;
};

export const PostsList: React.FC<TPostListProps> = ({ pagination }) => {
  const { data: posts, total, page, limit } = pagination;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts List</h1>

      <div className="flex justify-between items-center mb-4 border border-gray-200 rounded-lg p-4">
        <div className="border-r border-gray-200 pr-4">
          <p className="text-gray-600">
            Total: <span className="font-semibold">{total}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Pagination
            total={total}
            page={page}
            limit={limit}
            path="/blog_admin/posts"
          />
        </div>
        <div className="border-l border-gray-200 pl-4">
          <p className="text-gray-600">
            Items per page: <span className="font-semibold">{limit}</span>
          </p>
        </div>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Category Group</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Created At</th>
            <th className="border p-2">Updated At</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border p-2">{post.title}</td>
              <td className="border p-2">{post.status}</td>
              <td className="border p-2">{post.author.name}</td>
              <td className="border p-2">{post.category.categoryGroup.name}</td>
              <td className="border p-2">{post.category.name}</td>
              <td className="border p-2">
                {new Date(post.createdAt).toLocaleDateString()}
              </td>
              <td className="border p-2">
                {new Date(post.updatedAt).toLocaleDateString()}
              </td>
              <td className="border p-2">
                <button className="bg-blue-500 text-white px-4 mr-2 rounded-md h-[40px]">
                  Edit
                </button>
                <Link
                  target="_blank"
                  className="bg-green-500 text-white px-4 rounded-md h-[40px] inline-block leading-[40px]"
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
