import { TAdminPost, TCategoryGroupWithCategories } from '@/database';
import { CategoryPostsList } from '../category-posts-list';
import Link from 'next/link';
import { PostCard } from '@/blog-ui';

type TCategoryGroupListProps = {
  categoryGroups: TCategoryGroupWithCategories[];
  searchPosts: TAdminPost[];
  searchTerm?: string;
};

const CLASSNAMES = {
  container: 'flex flex-col gap-8 p-6',
  header:
    'flex justify-between items-center mb-6 pb-2 border-b-2 border-deep-teal',
  headerLink:
    'text-deep-teal hover:text-burnt-orange transition-colors font-medium text-sm sm:text-base w-[56px] sm:w-[64px]',
  headerText: 'font-bold text-base sm:text-xl text-dark-jungle',
  searchContainer: 'p-6 bg-soft-cream rounded-lg shadow-sm',
  searchList:
    'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  searchTerm: 'text-deep-teal',
  searchCount: 'text-deep-teal mt-2',
  searchDivider: 'my-6 border-deep-teal/20',
};

export async function CategoryGroupList({
  categoryGroups,
  searchPosts,
  searchTerm,
}: Readonly<TCategoryGroupListProps>) {
  if (searchPosts && searchTerm) {
    return (
      <div className={CLASSNAMES.searchContainer}>
        <p className={CLASSNAMES.searchTerm}>
          Searching for <span className="font-bold">{searchTerm}</span>
        </p>
        <p className={CLASSNAMES.searchCount}>
          Results: <span className="font-bold">{searchPosts.length}</span>
        </p>
        <hr className={CLASSNAMES.searchDivider} />
        <ul className={CLASSNAMES.searchList}>
          {searchPosts.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                category={post.category.name}
                title={post.title}
                displayImage={post.category.image || ''}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <ul className={[CLASSNAMES.container, 'overflow-y-auto'].join(' ')}>
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
