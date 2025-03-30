import { TCategory } from './category';

export type TCategoryGroup = {
  id: string;
  name: string;
  image: string;
};

export type TCategoryGroupDetail = TCategoryGroup & {
  categories: TCategory[];
};

export type TCategoryGroupWithCategories = {
  id: string;
  name: string;
  categories: {
    id: string;
    name: string;
  }[];
};
