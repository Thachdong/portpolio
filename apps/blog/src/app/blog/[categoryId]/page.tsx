import { PostCard } from 'libs/blog-ui/src/molecules/post-card';
import Link from 'next/link';

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
  breadcrumb: 'py-4',
  disabledBreadcrumb: 'text-gray-500',
  list: 'grid grid-cols-4 gap-4 mb-8',
};

export default async function CategoryDetailPage({
  params: { categoryId },
}: Readonly<TCategoryDetailProps>) {
  return (
    <div>
      <div className={CLASSNAMES.breadcrumb}>
        <Link href={`/blog#${categoryId}`}>FUNDAMENTAILS</Link> /{' '}
        <span className={CLASSNAMES.disabledBreadcrumb}>CATEGORY 1</span>
      </div>

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
