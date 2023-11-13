import { create } from "zustand";
import cuid from "cuid";

import { ProductProps } from "@/types";

interface CartItem extends ProductProps {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  cartTotal: number;
  add: (product: ProductProps) => void;
  remove: (idProduct: string, productCartId: string) => void;
  removeAll: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    if (cart.length)
      return cart.map((item) => item.count).reduce((prev, curr) => prev + curr);
    return 0;
  },

  cartTotal: 0,

  add: (product: ProductProps) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    const newTotal = calculateTotal(updatedCart);
    set({ cart: updatedCart, cartTotal: newTotal });
  },
  remove: (idProduct: string, productCartId: string) => {
    const { cart } = get();
    const updatedCart = removeCart(idProduct, productCartId, cart);
    const newTotal = calculateTotal(updatedCart);
    set({ cart: updatedCart, cartTotal: newTotal });
  },
  removeAll: () => set({ cart: [], cartTotal: 0 }),
}));

function updateCart(product: ProductProps, cart: CartItem[]): CartItem[] {
  const id = cuid();
  const cartItem = {
    ...product,
    count: 1,
    productCartId: id,
  } as CartItem;

  if (product.optionGroups && product.optionGroups.length > 0) {
    cart.push(cartItem);
  } else {
    const productOnCart = cart.map((item) => item.id).includes(product.id);

    if (!productOnCart) cart.push(cartItem);
    else {
      return cart.map((item) => {
        if (item.id === product.id)
          return {
            ...item,
            count: item.count + 1,
            qty: product.qty + item.qty,
          } as CartItem;
        return item;
      });
    }
  }
  return cart;
}

function removeCart(
  idProduct: string,
  productCartId: string,
  cart: CartItem[],
): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct && item.productCartId === productCartId) {
        let qty = item.qty / item.count;
        return {
          ...item,
          count: item.count - 1,
          qty: item.qty - qty,
        };
      }
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}

function calculateTotal(cart: CartItem[]): number {
  const total = cart.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );
  if (total > 100) return 100;
  return Math.round(total);
}
