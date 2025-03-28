import { EPostRole } from '@prisma/client';

export type TCreatePost = {
  filePath: string;
  authorId: string;
  categoryId: string;
  status: EPostRole;
};

export type TFrontMatter = {
  categoryGroupId: string;
  categoryId: string;
  authorId: string;
  status: string;
  publishedAt: string;
};
