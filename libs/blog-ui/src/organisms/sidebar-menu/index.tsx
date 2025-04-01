import { TCategoryGroupWithCategories } from '@/database';

type TSidebarMenuProps = {
  categoryGroups: TCategoryGroupWithCategories[];
};

const CLASSNAMES = {
  container: 'border-r border-gray-300 overflow-auto hide-scroll-bar',
};

export async function SidebarMenu({
  categoryGroups,
}: Readonly<TSidebarMenuProps>) {
  return (
    <ul
      className={CLASSNAMES.container}
      style={{ height: 'calc(100vh - 74px)' }}
    >
      {categoryGroups.map((group) => (
        <li className="mb-4" key={group.id}>
          <span className="inline-block font-bold border-b-4 border-[#2f6e91]">
            {group.name}
          </span>
          <ul>
            {group.categories.map((category) => (
              <li key={category.id}>
                <a href={`/blog#${category.id}`}>{category.name}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
