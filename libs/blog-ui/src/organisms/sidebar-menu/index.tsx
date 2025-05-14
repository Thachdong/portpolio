import { TCategoryGroupWithCategories } from '@/database';

type TSidebarMenuProps = {
  categoryGroups: TCategoryGroupWithCategories[];
};

const CLASSNAMES = {
  container:
    'border-r border-gray-300 overflow-auto hide-scroll-bar p-6 hidden md:block',
  groupContainer: 'mb-6 last:mb-0',
  groupHeader:
    'inline-block font-bold text-dark-jungle border-b-2 border-deep-teal mb-3',
  categoryList: 'space-y-2',
  categoryLink:
    'text-deep-teal hover:text-burnt-orange transition-colors block py-1',
};

export async function SidebarMenu({
  categoryGroups,
}: Readonly<TSidebarMenuProps>) {
  return (
    <ul className={CLASSNAMES.container}>
      {categoryGroups.map((group) => (
        <li className={CLASSNAMES.groupContainer} key={group.id}>
          <span className={CLASSNAMES.groupHeader}>{group.name}</span>
          <ul className={CLASSNAMES.categoryList}>
            {group.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={`/blog#${category.id}`}
                  className={CLASSNAMES.categoryLink}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
