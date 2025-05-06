import { getCategoryByIdService } from '@/database';
import { PostCard } from '../../molecules/post-card';

type TCategoryPostsProps = {
  categoryId: string;
};

const CLASSNAMES = {
  container: 'bg-soft-cream rounded-lg shadow-sm p-6',
  header: 'font-bold text-xl text-dark-jungle border-b-2 border-deep-teal mb-6',
  list: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
};

export async function CategoryPosts({
  categoryId,
}: Readonly<TCategoryPostsProps>) {
  const categoryDetail = await getCategoryByIdService(categoryId);

  if (!categoryDetail) {
    return null;
  }

  return (
    <div className={CLASSNAMES.container}>
      <h4 className={CLASSNAMES.header}>{categoryDetail.name}</h4>

      <ul className={CLASSNAMES.list}>
        {categoryDetail.posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            category={post.category.name}
            title={post.title}
            displayImage={categoryDetail.image}
          />
        ))}
      </ul>

      {categoryDetail.posts.length === 0 && (
        <p className="text-center text-gray-500">
          No posts available in this category.
        </p>
      )}
    </div>
  );
}
