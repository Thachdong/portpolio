import { Breadcrumb, CategoryPosts } from '@/blog-ui';
import { getCategoryGroupByIdService } from '@/database';

type TCategoryDetailProps = {
  params: {
    categoryGroupId: string;
  };
};

const CLASSNAMES = {
  list: 'flex flex-col gap-4 mb-8',
};

export default async function CategoryDetailPage({
  params,
}: Readonly<TCategoryDetailProps>) {
  const { categoryGroupId } = await params;

  const categoryGroup = await getCategoryGroupByIdService(categoryGroupId);

  return (
    <>
      <Breadcrumb
        items={[
          { title: 'Home', id: 'home', href: `/blog#${categoryGroup.id}` },
          { title: categoryGroup.name, id: categoryGroupId },
        ]}
      />

      <ul className={CLASSNAMES.list}>
        {categoryGroup.categories.map((category) => (
          <CategoryPosts key={category.id} categoryId={category.id} />
        ))}
      </ul>
    </>
  );
}
