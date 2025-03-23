import {
  PostComments,
  PostDetail,
  SameCategoryPosts,
} from '@my-portpolio/blog-ui';

type TPostDetailProps = {
  params: {
    postId: string;
  };
};

const CLASSNAMES = {
  container: 'grid grid-cols-[1fr,275px] gap-x-4 h-full',
  content: 'flex flex-col gap-y-12',
};

export default async function PostDetailPage({
  params: { postId },
}: Readonly<TPostDetailProps>) {
  return (
    <div className={CLASSNAMES.container}>
      <div className={CLASSNAMES.content}>
        <PostDetail postId={postId} />

        <PostComments />
      </div>

      <SameCategoryPosts />
    </div>
  );
}
