import { Category } from "../category/Category";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  imageUrl: string | null;
  category?: Category | null;
};
