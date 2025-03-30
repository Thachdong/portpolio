import prisma from '../prisma';
import { postSelectObject } from '../selectors';
import { TCategoryDetail } from '../types/category';

const categoryRepository = prisma.category;

/**
 * get category by id
 * @param id - The id of the category to get
 * @returns The category
 */
export async function getCategoryByIdService(
  id: string
): Promise<TCategoryDetail | null> {
  const category = await categoryRepository.findUnique({
    where: { id },
    include: {
      posts: {
        select: postSelectObject,
      },
    },
  });

  if (!category) {
    return null;
  }

  return {
    ...category,
    image: category.image || '',
    description: category.description || '',
  };
}

/**
 * Get first 8 posts of a category
 * @param id - The id of the category to get the posts from
 * @returns The first 8 posts of the category
 */
export async function getFirst8PostsOfCategoryService(id: string) {
  const category = await categoryRepository.findUnique({
    where: { id },
    include: {
      posts: {
        select: postSelectObject,
        take: 8,
      },
    },
  });

  if (!category) {
    return [];
  }

  return category.posts;
}
