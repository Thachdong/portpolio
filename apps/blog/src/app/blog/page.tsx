import { CategoryGroupList, SidebarMenu } from '@/blog-ui';
import {
  getAllCategoryGroupsService,
  searchPostsService,
  TAdminPost,
} from '@/database';

export const metadata = {
  title: "Dongt's Blog | Home",
  description: "Welcome to Dongt's Blog",
};

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
    <div className="grid md:grid-cols-[275px_1fr] grid-cols-[1fr] h-[calc(100vh-74px)]">
      <SidebarMenu categoryGroups={categoryGroups} />
      <CategoryGroupList
        categoryGroups={categoryGroups}
        searchPosts={searchPosts}
        searchTerm={search}
      />
    </div>
  );
}
