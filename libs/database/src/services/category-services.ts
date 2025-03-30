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
