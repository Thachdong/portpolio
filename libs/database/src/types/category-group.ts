import { TCategory } from './category';

export type TCategoryGroup = {
  id: string;
  name: string;
  image: string;
};

export type TCategoryGroupDetail = TCategoryGroup & {
  categories: TCategory[];
};
