import { CategoryGroupList, SidebarMenu } from '@/blog-ui';
import {
  getAllCategoryGroupsService,
  searchPostsService,
  TAdminPost,
} from '@/database';

type TBlogPageProps = {
  searchParams: Promise<{ search?: string }>;
};

export default async function BlogPage({
  searchParams,
}: Readonly<TBlogPageProps>) {
  const search = (await searchParams).search;

  let searchPosts: TAdminPost[] = [];

  if (search) {
    searchPosts = await searchPostsService(search);
  }

  const categoryGroups = await getAllCategoryGroupsService();

  return (
    <div className="grid grid-cols-[275px_1fr]">
      <SidebarMenu categoryGroups={categoryGroups} />
      <CategoryGroupList
        categoryGroups={categoryGroups}
        searchPosts={searchPosts}
        searchTerm={search}
      />
    </div>
  );
}
