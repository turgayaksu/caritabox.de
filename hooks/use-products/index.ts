"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { ProductProps } from "@/types";

export const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get<ProductProps[]>("/api/products");
      setProducts(response.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return { loading, products };
};
