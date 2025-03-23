import { Breadcrumb } from '../../molecules';

type TPostDetailProps = {
  postId: string;
};

export const PostDetail: React.FC<Readonly<TPostDetailProps>> = ({
  postId,
}) => {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: 'FUNDAMENTAILS', href: `/blog#${'categoryId'}` },
          { title: 'CATEGORY', href: `/blog/Category` },
          { title: 'Post' + postId },
        ]}
      />

      <div>Post Content</div>
    </div>
  );
};
