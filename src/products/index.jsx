import { useState, useEffect } from "react";
import ProductsView from "./ProductsView";
import ProductForm from "./ProductsForm";
import { getProductsFromStorage } from "./productsData";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "", category: "" });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const data = getProductsFromStorage();
    setProducts(data);
  }, []);

  const handleCreate = (values) => {
    const newProduct = {
      id: Date.now(),
      ...values,
      price: Number(values.price),
    };
    const updated = [...products, newProduct];
    setProducts(updated);
    setFormData({ name: "", price: "", category: "" });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    setEditProduct(productToEdit);
    setFormData({
      name: productToEdit.name || "",
      price: productToEdit.price || "",
      category: productToEdit.category || "",
    });
  };

  const handleSaveEdit = (values) => {
    const updatedProducts = products.map((product) =>
      product.id === editProduct.id
        ? { ...product, ...values, price: Number(values.price) }
        : product
    );
    setProducts(updatedProducts);
    setEditProduct(null);
    setFormData({ name: "", price: "", category: "" });
  };

  return (
    <>
      <ProductForm
        initialValues={formData}
        onCreate={handleCreate}
        onSaveEdit={handleSaveEdit}
        isEditing={editProduct !== null}
      />
      <ProductsView products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};

export default ProductsPage;
