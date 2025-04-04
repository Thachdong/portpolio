'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

type TMenuItem = {
  name: string;
  path: string;
};

const MENU: TMenuItem[] = [
  { name: 'Create Post', path: '/create-post' },
  { name: 'Posts', path: '/posts' },
  { name: 'Feedbacks', path: '/feedbacks' },
  { name: 'Chat', path: '/chat' },
  { name: 'Users', path: '/users' },
];

const CLASSNAMES = {
  menu: 'flex flex-col h-screen w-[250px] bg-soft-cream shadow-lg border-r border-deep-teal',
  item: 'w-full text-dark-jungle hover:text-soft-cream hover:bg-deep-teal transition-colors duration-200 px-4 py-2',
  link: 'w-full h-full flex items-center justify-start',
  active: 'bg-deep-teal text-soft-cream font-bold',
};

export const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const renderItem = useCallback(
    (item: TMenuItem) => {
      const itemPath = `/blog_admin${item.path}`;
      const isActive = pathname === itemPath;

      return (
        <li
          className={[CLASSNAMES.item, isActive ? CLASSNAMES.active : ''].join(
            ' '
          )}
          key={item.path}
        >
          <Link className={CLASSNAMES.link} href={itemPath}>
            {item.name}
          </Link>
        </li>
      );
    },
    [pathname]
  );
  return <ul className={CLASSNAMES.menu}>{MENU.map(renderItem)}</ul>;
};
