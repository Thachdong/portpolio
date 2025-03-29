'use client';
import { Breadcrumb } from '../../molecules';
import { markdownComponents } from '@/utility';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type TPostDetailProps = {
  content: MDXRemoteSerializeResult;
  categoryId: string;
  categoryGroupId: string;
  categoryName: string;
  categoryGroupName: string;
  postId: string;
  postTitle: string;
};

export const PostDetail: React.FC<Readonly<TPostDetailProps>> = ({
  content,
  categoryId,
  categoryGroupId,
  categoryName,
  categoryGroupName,
  postId,
  postTitle,
}) => {
  console.log(content);
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: categoryGroupName,
            href: `/blog#${categoryGroupId}`,
            id: categoryGroupId,
          },
          { title: categoryName, href: `/blog/Category`, id: categoryId },
          { title: postTitle, id: postId },
        ]}
      />

      <div>
        <h1>{postTitle}</h1>
        <MDXRemote {...content} components={markdownComponents} />
      </div>
    </div>
  );
};
