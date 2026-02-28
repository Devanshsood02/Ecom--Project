import React from "react";
import { useEffect, useState } from "react";

import CreateProductForm from "../components/product/CreateProductForm";
import ProductCard from "../components/product/ProductCard";
import {
  PRODUCT_STORAGE_KEY,
  getStorageItem,
  setStorageItem
} from "../utils/Storage";



const Products = () => {
  const [products, setProducts] = useState([]);

  // Load products on page load
  useEffect(() => {
    const storedProducts = getStorageItem(PRODUCT_STORAGE_KEY);
    setProducts(storedProducts);
  }, []);

  // Handle create product
  const handleCreate = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setStorageItem(PRODUCT_STORAGE_KEY, updatedProducts);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <CreateProductForm onCreate={handleCreate} />

      <div className="mt-6 space-y-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;