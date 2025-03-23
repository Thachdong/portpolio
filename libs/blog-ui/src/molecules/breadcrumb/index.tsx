import Link from 'next/link';
import React from 'react';

type TBreadcrumbProps = {
  items: {
    href?: string;
    title: string;
  }[];
};

const CLASSNAMES = {
  breadcrumb: 'py-4',
  disabledBreadcrumb: 'text-gray-500',
};

export const Breadcrumb: React.FC<Readonly<TBreadcrumbProps>> = ({ items }) => {
  return (
    <div className={CLASSNAMES.breadcrumb}>
      {items.map((i) => {
        if (i.href) {
          return (
            <>
              <Link href={i.href}>{i.title}</Link> {' / '}
            </>
          );
        }

        return <span className={CLASSNAMES.disabledBreadcrumb}>{i.title}</span>;
      })}
    </div>
  );
};
