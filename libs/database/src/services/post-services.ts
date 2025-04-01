'use server';
import { CategoryGroup, EPostRole, Post } from '@prisma/client';
import prisma from '../prisma';
import { TAdminPost, TCreatePost, TPostDetail } from '../types/post';
import { IPagination, IPaginationResponse, PAGE_SIZE } from '@/utility';
import { postSelectObject } from '../selectors';

const postRepository = prisma.post;

/**
 * Create a new post
 * @param post - The post to create
 * @returns The created post
 */
export async function createPostService(post: TCreatePost): Promise<Post> {
  return postRepository.create({
    data: post,
  });
}

/**
 * Update the status of a post
 * @param id - The id of the post to update
 * @param status - The new status of the post
 * @returns The updated post
 */
export async function updatePostStatusService(
  id: string,
  status: EPostRole
): Promise<Post> {
  return postRepository.update({
    where: { id },
    data: { status },
  });
}

/**
 * Get a post by its id
 * @param id - The id of the post to get
 * @returns The post
 */
export async function getPostByIdService(
  id: string
): Promise<TPostDetail | null> {
  const data = await postRepository.findUnique({
    where: { id },
    select: {
      id: true,
      filename: true,
      title: true,
      category: {
        select: {
          id: true,
          name: true,
          categoryGroup: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!data) {
    return null;
  }

  const post = {
    id: data.id,
    filename: data.filename,
    title: data.title,
    category: {
      id: data.category.id,
      name: data.category.name,
    },
    categoryGroup: {
      id: data.category.categoryGroup.id,
      name: data.category.categoryGroup.name,
    },
  };

  return post;
}

/**
 * Get all posts with pagination
 * @param pagination - The pagination parameters
 * @returns The posts and the total number of posts
 */
export async function getPostsPaginatedService(
  pagination: IPagination
): Promise<IPaginationResponse<TAdminPost>> {
  const page = pagination.page ?? 1;
  const limit = pagination.limit ?? PAGE_SIZE;

  const [data, total] = await Promise.all([
    postRepository.findMany({
      skip: (page - 1) * limit,
      take: limit,
      select: postSelectObject,
    }),
    postRepository.count(),
  ]);

  return {
    data,
    total,
    page,
    limit,
  };
}

/**
 * Get all posts by category id
 * @param categoryId - The id of the category to get the posts from
 * @returns The posts
 */
export async function getPostsByCategoryIdService(
  categoryId: string
): Promise<TAdminPost[]> {
  return postRepository.findMany({
    where: {
      category: {
        id: categoryId,
      },
    },
    select: postSelectObject,
  });
}

/**
 * Get all posts by category group id and pagination
 * @param categoryGroupId - The id of the category group to get the posts from
 * @param pagination - The pagination parameters
 * @returns The posts and the total number of posts
 */
export async function getPostByCategoryGroupAndPaginationService(
  categoryGroupId: string,
  pagination: IPagination
): Promise<IPaginationResponse<TAdminPost>> {
  const page = pagination.page ?? 1;
  const limit = pagination.limit ?? PAGE_SIZE;

  const [data, total] = await Promise.all([
    postRepository.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        category: {
          categoryGroup: {
            id: categoryGroupId,
          },
        },
      },
      select: postSelectObject,
    }),
    postRepository.count({
      where: {
        category: {
          categoryGroup: {
            id: categoryGroupId,
          },
        },
      },
    }),
  ]);

  return {
    data,
    total,
    page,
    limit,
  };
}

/**
 * get category group by category id
 * @param postId - The id of the category to get the category group from
 * @returns The category group
 */
export async function getCategoryGroupByPostIdService(
  postId: string
): Promise<CategoryGroup | null> {
  const post = await postRepository.findUnique({
    where: {
      id: postId,
    },
    include: {
      category: {
        include: {
          categoryGroup: true,
        },
      },
    },
  });

  return post?.category.categoryGroup || null;
}

/**
 * Search posts by title, category name, category group name
 * @param search - The search term
 * @returns The posts
 */
export async function searchPostsService(
  search: string
): Promise<TAdminPost[]> {
  return postRepository.findMany({
    where: {
      OR: [
        { title: { contains: search, mode: 'insensitive' } },
        { category: { name: { contains: search, mode: 'insensitive' } } },
        {
          category: {
            categoryGroup: { name: { contains: search, mode: 'insensitive' } },
          },
        },
      ],
    },
    select: postSelectObject,
  });
}
