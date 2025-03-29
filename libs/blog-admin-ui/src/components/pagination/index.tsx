import Link from 'next/link';

type TPaginationProps = {
  total: number;
  page: number;
  limit: number;
  path: string;
};

export const Pagination: React.FC<TPaginationProps> = ({
  total,
  page,
  limit,
  path,
}) => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1).map(
        (pageNum) =>
          pageNum === page ? (
            <span
              key={pageNum}
              className="px-3 py-1 rounded border bg-blue-500 text-white border-blue-600"
            >
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={`${path}?page=${pageNum}`}
              className="px-3 py-1 rounded border bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            >
              {pageNum}
            </Link>
          )
      )}
    </div>
  );
};
