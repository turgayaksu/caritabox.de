type ProductType = {
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

type ProductProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div>
      <div>urun detay</div>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductCard;
