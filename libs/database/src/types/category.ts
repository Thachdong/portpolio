import { TAdminPost } from './post';

export type TCategory = {
  id: string;
  name: string;
  image: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TCategoryDetail = TCategory & {
  posts: TAdminPost[];
};
