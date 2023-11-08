"use client";
import { useRouter } from "next/navigation";

const ProductEditPage = () => {
  const router = useRouter();
  router.push("/admin/products/");
  return <div>Product Edit Page</div>;
};

export default ProductEditPage;
