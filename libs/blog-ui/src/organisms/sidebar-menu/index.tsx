import React from 'react';

type TSidebarMenuProps = {};

const CLASSNAMES = {
  container: 'border-r border-gray-300 overflow-auto hide-scroll-bar',
};

const MOCK_CATEGORY = [
  {
    id: 'react',
    name: 'react',
    posts: [
      {
        id: 'post-1',
        title: 'Cấu trúc HTML5: Cách tạo template HTML5 đầu tiên',
      },
      {
        id: 'post-2',
        title: 'post title 2',
      },
      {
        id: 'post-3',
        title: 'post title 3',
      },
      {
        id: 'post-4',
        title: 'post title 4',
      },
      {
        id: 'post-5',
        title: 'post title 5',
      },
    ],
  },
  {
    id: 'vue',
    name: 'vue',
    posts: [
      {
        id: 'post-1',
        title: 'post title 1',
      },
      {
        id: 'post-2',
        title: 'post title 2',
      },
      {
        id: 'post-3',
        title: 'post title 3',
      },
      {
        id: 'post-4',
        title: 'post title 4',
      },
      {
        id: 'post-5',
        title: 'post title 5',
      },
    ],
  },
  {
    id: 'angular',
    name: 'angular',
    posts: [
      {
        id: 'post-1',
        title: 'post title 1',
      },
      {
        id: 'post-2',
        title: 'post title 2',
      },
      {
        id: 'post-3',
        title: 'post title 3',
      },
      {
        id: 'post-4',
        title: 'post title 4',
      },
      {
        id: 'post-5',
        title: 'post title 5',
      },
    ],
  },
  {
    id: 'next',
    name: 'next',
    posts: [
      {
        id: 'post-1',
        title: 'post title 1',
      },
      {
        id: 'post-2',
        title: 'post title 2',
      },
      {
        id: 'post-3',
        title: 'post title 3',
      },
      {
        id: 'post-4',
        title: 'post title 4',
      },
      {
        id: 'post-5',
        title: 'post title 5',
      },
    ],
  },
  {
    id: 'vanilla-javascript',
    name: 'Vanilla Javascript',
    posts: [
      {
        id: 'post-1',
        title: 'post title 1',
      },
      {
        id: 'post-2',
        title: 'post title 2',
      },
      {
        id: 'post-3',
        title: 'post title 3',
      },
      {
        id: 'post-4',
        title: 'post title 4',
      },
      {
        id: 'post-5',
        title: 'post title 5',
      },
    ],
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
    <ul className={CLASSNAMES.container} style={{ height: "calc(100vh - 74px)"}}>
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
