import { getCategoryByIdService } from '@/database';
import { PostCard } from '../../molecules/post-card';

type TCategoryPostsProps = {
  categoryId: string;
};

const CLASSNAMES = {
  list: 'grid grid-cols-4 gap-4 mb-8',
  header: 'font-bold text-xl border-b-2 border-[#2f6e91] mb-4',
};

export async function CategoryPosts({
  categoryId,
}: Readonly<TCategoryPostsProps>) {
  const categoryDetail = await getCategoryByIdService(categoryId);

  if (!categoryDetail) {
    return null;
  }

  return (
    <div>
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
    </div>
  );
}
