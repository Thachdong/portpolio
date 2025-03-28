import { Breadcrumb, PostCard } from '@/blog-ui';

type TCategoryDetailProps = {
  params: {
    categoryId: string;
  };
};

type TPost = { id: string; title: string; displayImage: string };

const MOCK_POSTS: TPost[] = [];

for (let i = 0; i < 20; i++) {
  MOCK_POSTS.push({
    id: 'post-' + i,
    title: 'Cấu trúc HTML5: Cách tạo template HTML5 đầu tiên - ' + i,
    displayImage: 'https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg',
  });
}

const CLASSNAMES = {
  list: 'grid grid-cols-4 gap-4 mb-8',
};

export default async function CategoryDetailPage({
  params: { categoryId },
}: Readonly<TCategoryDetailProps>) {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: 'FUNDAMENTAILS', href: `/blog#${categoryId}`, id: 'fundamentals' },
          { title: 'CATEGORY 1', id: 'category-1' },
        ]}
      />

      <ul className={CLASSNAMES.list}>
        {MOCK_POSTS.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            group={'group'}
            category={'category'}
            title={post.title}
            displayImage={post.displayImage}
          />
        ))}
      </ul>
    </div>
  );
}
