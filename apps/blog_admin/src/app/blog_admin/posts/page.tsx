import { PostsList } from '@/blog-admin-ui';
import { getPostsPaginatedService } from '@/database';

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;

  const page = params.page ? parseInt(params.page) : 1;

  const pagination = await getPostsPaginatedService({ page });

  return <PostsList pagination={pagination} />;
}
