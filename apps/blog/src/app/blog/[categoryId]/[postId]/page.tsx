import { Breadcrumb, PostComments, SameCategoryPosts } from '@/blog-ui';
import { getPostByIdService, getMdFileContent, TFrontMatter } from '@/database';
import { compileMDX } from 'next-mdx-remote/rsc';
import { markdownComponents } from '@/utility';

type TPostDetailProps = {
  params: {
    postId: string;
    categoryId: string;
  };
};

const CLASSNAMES = {
  container: 'grid grid-cols-[1fr,275px] gap-x-4 h-full',
  content: 'flex flex-col gap-y-4',
};

export default async function PostDetailPage({
  params,
}: Readonly<TPostDetailProps>) {
  const { postId } = await params;

  const post = await getPostByIdService(postId);

  // #region -- get post content from s3
  const text = await getMdFileContent(post?.filename || '');

  const { content, frontmatter } = await compileMDX<TFrontMatter>({
    source: text || '',
    options: {
      parseFrontmatter: true,
    },
    components: markdownComponents,
  });
  // #endregion

  return (
    <div className={CLASSNAMES.container}>
      <div className={CLASSNAMES.content}>
        <Breadcrumb
          items={[
            {
              title: post?.categoryGroup.name || '',
              href: `/blog#${post?.categoryGroup.id}`,
              id: post?.categoryGroup.id || '',
            },
            {
              title: post?.category.name || '',
              href: `/blog/${post?.category.id}`,
              id: post?.category.id || '',
            },
            { title: post?.title || '', id: postId },
          ]}
        />

        <h1 className="text-2xl font-bold text-center capitalize">
          {post?.title || ''}
        </h1>

        <p className="text-sm text-gray-500 border-b border-gray-300 pb-4">
          Publish at:{' '}
          <span className="font-bold">{frontmatter?.publishedAt}</span>
        </p>

        <div style={{ all: 'unset' }}>{content}</div>

        <PostComments />
      </div>

      <SameCategoryPosts
        group={post?.categoryGroup.id || ''}
        category={post?.category.id || ''}
      />
    </div>
  );
}
