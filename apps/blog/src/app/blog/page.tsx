import { PostGroup, SidebarMenu } from '@my-portpolio/blog-ui';

export default async function BlogPage() {
  return (
    <div className="grid grid-cols-[275px_1fr]">
      <SidebarMenu />
      <PostGroup />
    </div>
  );
}
