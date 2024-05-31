// models/Products.ts

export interface Category {
  id: number;
  image: string | null;
  isActive: number;
  name: string;
}

export interface Product {
  buying_price: number;
  category: Category;
  difficulty: number;
  id: number;
  isActive: boolean;
  materials: Array<{}>;
  product_image: string;
  product_name: string;
  small_description: string;
  description: string;
  stock: number;
}

export type Products = Product[];
