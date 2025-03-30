import { CategoryGroupList, SidebarMenu } from '@/blog-ui';
import { getAllCategoryGroupsService } from '@/database';

export default async function BlogPage() {
  const categoryGroups = await getAllCategoryGroupsService();
  return (
    <div className="grid grid-cols-[275px_1fr]">
      <SidebarMenu categoryGroups={categoryGroups} />
      <CategoryGroupList categoryGroups={categoryGroups} />
    </div>
  );
}
