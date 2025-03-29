import { EPostRole } from '@prisma/client';

export type TCreatePost = {
  filename: string;
  title: string;
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
  filename: string;
  title: string;
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

export type TPostDetail = {
  id: string;
  filename: string;
  title: string;
  category: {
    id: string;
    name: string;
  };
  categoryGroup: {
    id: string;
    name: string;
  };
};
