import React from "react";
import { useState } from "react";

const CreateProductForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.price) return;

    const newProduct = {
      id: crypto.randomUUID(),
      name: formData.name,
      price: Number(formData.price),
      description: formData.description
    };

    onCreate(newProduct);

    // Reset form
    setFormData({
      name: "",
      price: "",
      description: ""
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4 max-w-md"
    >
      <h2 className="text-xl font-semibold">Add Product</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default CreateProductForm;