import { getFirst8PostsOfCategoryService } from '@/database';
import { PostCard } from '../../molecules/post-card';

type TCategoryPostsListProps = {
  categoryId: string;
};

export async function CategoryPostsList({
  categoryId,
}: Readonly<TCategoryPostsListProps>) {
  const posts = await getFirst8PostsOfCategoryService(categoryId);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          category={post.category.name}
          title={post.title}
          displayImage={post.category.image || ''}
        />
      ))}

      {posts.length === 0 && (
        <div className="col-span-4 text-center">
          <p className="text-gray-500">No posts available</p>
        </div>
      )}
    </ul>
  );
}
