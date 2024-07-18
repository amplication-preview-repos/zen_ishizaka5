import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  imageUrl?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
