import { Breadcrumb, PostComments, SameCategoryPosts } from '@/blog-ui';
import {
  getPostByIdService,
  getMdFileContent,
  TFrontMatter,
  getPostsByCategoryIdService,
  getCommentsByPostIdService,
} from '@/database';
import { compileMDX } from 'next-mdx-remote/rsc';
import { markdownComponents } from '@/utility';

export const metadata = {
  title: "Dongt's Blog | Post",
  description: "Dongt's Blog | Post",
};

type TPostDetailProps = {
  params: Promise<{
    postId: string;
    categoryId: string;
  }>;
};

const CLASSNAMES = {
  container:
    'grid md:grid-cols-[1fr,275px] grid-cols-[1fr] gap-x-4 h-full px-4',
  content: 'flex flex-col gap-y-4',
  sidebar: 'md:block hidden',
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

  // #region -- get same category posts and comments
  const [sameCategoryPosts, comments] = await Promise.all([
    getPostsByCategoryIdService(post?.category.id || ''),
    getCommentsByPostIdService(postId),
  ]);
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
              href: `/blog/${post?.categoryGroup.id}#${post?.category.id}`,
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

        <PostComments postId={postId} currentComments={comments} />
      </div>

      <div className={CLASSNAMES.sidebar}>
        <SameCategoryPosts
          category={post?.category.id || ''}
          posts={sameCategoryPosts}
        />
      </div>
    </div>
  );
}
