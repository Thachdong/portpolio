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
          { title: 'FUNDAMENTAILS', href: `/blog#${'categoryId'}`, id: 'fundamentals' },
          { title: 'CATEGORY', href: `/blog/Category`, id: 'category' },
          { title: 'Post' + postId, id: 'post' },
        ]}
      />

      <div>Post Content</div>
    </div>
  );
};
