import React from 'react';

type TSidebarMenuProps = {};

const CLASSNAMES = {
  container: 'border-r border-gray-300 overflow-auto hide-scroll-bar',
};

const MOCK_CATEGORY = [
  {
    id: 'Category-0',
    name: 'react',
  },
  {
    id: 'Category-1',
    name: 'vue',
  },
  {
    id: 'Category-2',
    name: 'angular',
  },
  {
    id: 'Category-3',
    name: 'next',
  },
  {
    id: 'Category-4',
    name: 'Vanilla Javascript',
  },
];

const MOCK_CATEGORY_TAGS = [
  'FUNDAMENTALS',
  'FRAMEWORKDS',
  'LIBRARIES',
  'Others',
];

export const SidebarMenu: React.FC<Readonly<TSidebarMenuProps>> = () => {
  return (
    <ul
      className={CLASSNAMES.container}
      style={{ height: 'calc(100vh - 74px)' }}
    >
      {MOCK_CATEGORY_TAGS.map((tag) => (
        <li className="mb-4" key={tag}>
          <span className="inline-block font-bold border-b-4 border-[#2f6e91]">
            {tag}
          </span>
          <ul>
            {MOCK_CATEGORY.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`}>{category.name}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
