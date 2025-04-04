import Link from 'next/link';

type TPaginationProps = {
  total: number;
  page: number;
  limit: number;
  path: string;
};

const CLASSNAMES = {
  wrapper: 'flex justify-center items-center gap-3 py-4',
  page: 'px-4 py-2 rounded-full bg-deep-teal text-soft-cream font-semibold shadow-md',
  activePage:
    'px-4 py-2 rounded-full border border-gray-300 !bg-soft-cream text-deep-teal hover:bg-blue-100 transition-colors duration-200',
  link: 'px-4 py-2 rounded-full border border-gray-300 bg-white text-deep-teal hover:bg-blue-100 transition-colors duration-200',
};

export const Pagination: React.FC<Readonly<TPaginationProps>> = ({
  total,
  page,
  limit,
  path,
}) => {
  return (
    <div className={CLASSNAMES.wrapper}>
      {Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1).map(
        (pageNum) =>
          pageNum === page ? (
            <span key={pageNum} className={CLASSNAMES.activePage}>
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={`${path}?page=${pageNum}`}
              className={CLASSNAMES.link}
            >
              {pageNum}
            </Link>
          )
      )}
    </div>
  );
};
