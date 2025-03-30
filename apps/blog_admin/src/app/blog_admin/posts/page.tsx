import { PostsList } from '@/blog-admin-ui';
import { getPostsPaginatedService } from '@/database';

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const pagination = await getPostsPaginatedService({ page });

  return <PostsList pagination={pagination} />;
}
