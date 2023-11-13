"use client";

import Image from "next/image";
import { IoBan } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCartStore } from "@/hooks";
import StepButtons from "../buttons";
import CartProgress from "../cart-progress";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart, remove, removeAll } = useCartStore();
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const defaultSelectedOptions = cart.reduce(
      (acc, product) => {
        product.optionGroups.forEach((group) => {
          if (group.optionGroup.options.length > 0) {
            const uniqueId = `${product.productCartId}-${group.id}`;
            if (!acc[uniqueId]) {
              acc[uniqueId] = group.optionGroup.options[0].id;
            }
          }
        });
        return acc;
      },
      {} as Record<string, string>,
    );

    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      ...defaultSelectedOptions,
    }));
  }, [cart]);

  const handleSelectionChange = (
    productCartId: string,
    groupId: string,
    selectedOptionId: string,
  ) => {
    const uniqueId = `${productCartId}-${groupId}`;
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [uniqueId]: selectedOptionId,
    }));
  };

  return (
    <div className="rounded-md bg-slate-100 p-5 dark:bg-slate-800">
      <header>
        <div className="flex items-center justify-between">
          <h3>Ihr Warenkorb</h3>
          {cart.length > 0 && (
            <Button
              variant="ghost"
              className="text-sm"
              onClick={() => removeAll()}
            >
              <IoBan className="mr-1" />
              Warenkorb leeren
            </Button>
          )}
        </div>
        <CartProgress />
      </header>
      <div className="my-4 space-y-4">
        {cart.map((product, key) => (
          <div
            key={key}
            onClick={() => {}}
            className="relative flex w-full flex-row items-center gap-4 rounded border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-1 flex-row items-center gap-4">
              <Image
                src={product.imageUrl}
                width={96}
                height={96}
                alt={product.title}
                className="h-24 w-24 object-cover"
              />
              <div className="text-caritabox-500">
                <h3 className="text-sm">{product.title}</h3>
                <p className="text-xs">
                  {product.qty} {product.unit}
                </p>
                <div className="mt-3 flex flex-col space-y-2 text-black dark:text-white">
                  {product.optionGroups.map((group) => (
                    <div key={group.id} className="flex flex-col text-sm">
                      <h3 className="font-medium">{group.optionGroup.name}</h3>
                      <RadioGroup className="grid grid-cols-4">
                        {group.optionGroup.options.map((option, key) => {
                          const uniqueId = `${product.productCartId}-${group.id}`;
                          return (
                            <div
                              key={option.id}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={option.id}
                                id={`opt-${product.productCartId + option.id}`}
                                className="h-3 w-3"
                                checked={
                                  selectedOptions[uniqueId] === option.id
                                }
                                onClick={() =>
                                  handleSelectionChange(
                                    product.productCartId,
                                    group.id,
                                    option.id,
                                  )
                                }
                              />
                              <Label
                                htmlFor={`opt-${
                                  product.productCartId + option.id
                                }`}
                                className="cursor-pointer p-1 pl-2 text-xs"
                              >
                                {option.option.name}
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute right-3 top-3">
              <IoBan
                onClick={() => remove(product.id, product.productCartId)}
                className="cursor-pointer text-red-500"
                size={18}
              />
            </div>
          </div>
        ))}
      </div>
      <StepButtons />
    </div>
  );
};

export default Cart;
