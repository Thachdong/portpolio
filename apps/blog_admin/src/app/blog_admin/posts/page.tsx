import { PostsList } from '@/blog-admin-ui';
import { getPostsPaginatedService } from '@/database';
import { PAGE_SIZE } from '@/utility';

export default async function PostsPage() {
  const posts = await getPostsPaginatedService(1, PAGE_SIZE);
  return <PostsList posts={posts} />;
}
