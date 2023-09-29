export interface Product {
  id: number;
  imgSrc: string;
  imgAlt: string;
  title: string;
  cost: number;
  oldCost?: number;
  iconNew?: boolean;
  inStock: boolean;
}
