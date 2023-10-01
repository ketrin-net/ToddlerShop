import { SubCategory } from './subCategory';

export interface Category {
  id: number;
  name: string;
  subCategory: SubCategory[];
}
