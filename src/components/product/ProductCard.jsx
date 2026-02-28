import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
      <h3 className="text-lg font-bold mb-2">
        {product.name}
      </h3>

      <p className="text-green-600 font-semibold mb-2">
        ₹ {product.price}
      </p>

      <p className="text-gray-600 text-sm">
        {product.description}
      </p>
    </div>
  );
};


export default ProductCard