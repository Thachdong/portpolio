import Link from 'next/link';
import React from 'react';

type TBreadcrumbProps = {
  items: {
    href?: string;
    title: string;
    id: string;
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
            <React.Fragment key={i.id}>
              <Link
                href={i.href}
                className="text-deep-teal font-bold hover:text-burnt-orange"
              >
                {i.title}
              </Link>{' '}
              {' / '}
            </React.Fragment>
          );
        }

        return (
          <span key={i.id} className={CLASSNAMES.disabledBreadcrumb}>
            {i.title}
          </span>
        );
      })}
    </div>
  );
};
