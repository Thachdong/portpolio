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

export type TAdminPost = {
  id: string;
  filePath: string;
  status: EPostRole;
  author: {
    id: string;
    name: string;
  };
  category: {
    id: string;
    name: string;
    categoryGroup: {
      id: string;
      name: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
};
