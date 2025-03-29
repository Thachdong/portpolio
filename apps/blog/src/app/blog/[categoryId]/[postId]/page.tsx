import { PostComments, PostDetail, SameCategoryPosts } from '@/blog-ui';
import { getMdFileContent, getPostByIdService } from '@/database';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

type TPostDetailProps = {
  params: {
    postId: string;
    categoryId: string;
  };
};

const CLASSNAMES = {
  container: 'grid grid-cols-[1fr,275px] gap-x-4 h-full',
  content: 'flex flex-col gap-y-12',
};

export default async function PostDetailPage({
  params: { postId },
}: Readonly<TPostDetailProps>) {
  const post = await getPostByIdService(postId);

  const text = await getMdFileContent(post?.filename || '');

  const { content } = matter(text || '');

  const mdxContent = await serialize(content || '');

  return (
    <div className={CLASSNAMES.container}>
      <div className={CLASSNAMES.content}>
        <PostDetail
          postId={postId}
          postTitle={post?.title || ''}
          content={mdxContent}
          categoryId={post?.category.id || ''}
          categoryGroupId={post?.categoryGroup.id || ''}
          categoryName={post?.category.name || ''}
          categoryGroupName={post?.categoryGroup.name || ''}
        />

        <PostComments />
      </div>

      <SameCategoryPosts
        group={post?.categoryGroup.id || ''}
        category={post?.category.id || ''}
      />
    </div>
  );
}
