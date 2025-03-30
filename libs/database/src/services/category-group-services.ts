import prisma from '../prisma';
import { TCategoryGroupDetail } from '../types';

const postGroupRepository = prisma.categoryGroup;

/**
 * Get category group by id
 * @param id - The id of the category group
 * @returns The category group
 */
export async function getCategoryGroupByIdService(
  id: string
): Promise<TCategoryGroupDetail> {
  const categoryGroup = await postGroupRepository.findUnique({
    where: { id },
    include: {
      categories: true,
    },
  });

  if (!categoryGroup) {
    throw new Error('Category group not found');
  }

  return {
    ...categoryGroup,
    image: categoryGroup.image || '',
    categories: categoryGroup.categories.map((category) => ({
      ...category,
      image: category.image || '',
      description: category.description || '',
    })),
  };
}
