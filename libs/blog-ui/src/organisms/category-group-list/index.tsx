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
  container: 'flex flex-col gap-4 p-4',
  header: 'flex justify-between items-center mb-4 border-b-2 border-[#2f6e91]',
  headerLink: 'text-[#2f6e91]',
  headerText: 'font-bold text-xl',
  searchContainer: 'p-4',
  searchList: 'grid grid-cols-4 gap-4',
};

export async function CategoryGroupList({
  categoryGroups,
  searchPosts,
  searchTerm,
}: Readonly<TCategoryGroupListProps>) {
  if (searchPosts && searchTerm) {
    return (
      <div className={CLASSNAMES.searchContainer}>
        <p className="text-gray-500">
          Searching for <span className="font-bold">{searchTerm}</span>
        </p>
        <p className="text-gray-500">
          Results: <span className="font-bold">{searchPosts.length}</span>
        </p>
        <hr className="my-4 border-gray-300" />
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
    <ul className={CLASSNAMES.container}>
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
