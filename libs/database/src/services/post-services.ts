'use server';
import { EPostRole, Post } from '@prisma/client';
import prisma from '../prisma';
import { TAdminPost, TCreatePost } from '../types/post';
import { IPagination, IPaginationResponse, PAGE_SIZE } from '@/utility';

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
export async function getPostByIdService(id: string): Promise<Post | null> {
  return postRepository.findUnique({
    where: { id },
  });
}

/**
 * Get all posts
 * @returns All posts
 */
const postSelectObject = {
  id: true,
  filename: true,
  title: true,
  status: true,
  author: {
    select: {
      id: true,
      name: true,
    },
  },
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
  createdAt: true,
  updatedAt: true,
};

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
): Promise<Post[]> {
  return postRepository.findMany({
    where: {
      category: {
        id: categoryId,
      },
    },
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
