import { TCategoryGroupWithCategories } from '@/database';
import { CategoryPostsList } from '../category-posts-list';
import Link from 'next/link';

type TCategoryGroupListProps = {
  categoryGroups: TCategoryGroupWithCategories[];
};

const CLASSNAMES = {
  container: 'flex flex-col gap-4 p-4',
  header: 'flex justify-between items-center mb-4 border-b-2 border-[#2f6e91]',
  headerLink: 'text-[#2f6e91]',
  headerText: 'font-bold text-xl',
};

export async function CategoryGroupList({
  categoryGroups,
}: Readonly<TCategoryGroupListProps>) {
  return (
    <ul className={CLASSNAMES.container}>
      {categoryGroups.map((group) => {
        return group.categories.map((category) => {
          return (
            <li key={category.id}>
              <div className={CLASSNAMES.header} id={category.id}>
                <h4 className={CLASSNAMES.headerText} id={category.id}>
                  {group.name} / {category.name}
                </h4>
                <Link
                  className={CLASSNAMES.headerLink}
                  href={`/blog/${group.id}`}
                >
                  View All
                </Link>
              </div>
              <CategoryPostsList categoryId={category.id} />
            </li>
          );
        });
      })}
    </ul>
  );
}
