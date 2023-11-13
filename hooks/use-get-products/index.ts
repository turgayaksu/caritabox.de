import { create } from "zustand";

type ProductProps = {
  products: {
    id: string;
    title: string;
    description: string | null;
    imageUrl: string | null;
    price: number;
    unit: string;
    createdAt: Date;
    updatedAt: Date;
    optionGroups: {
      optionGroup: {
        id: string;
        name: string;
      };
    } & {
      id: string;
      createdAt: Date;
      productsId: string;
      optionGroupsId: string;
    };
  };
};

interface ProductState {
  products: ProductProps[];
  setProducts: (products: ProductProps[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
