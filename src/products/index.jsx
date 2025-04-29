import { useState, useEffect } from "react";
import ProductsView from "./ProductsView";
import ProductForm from "./ProductsForm";
import { getProductsFromStorage } from "./productsData"; 

const ProductsPage = () => {  //componente principal de la pagina de productos
  const [products, setProducts] = useState([]);  //estado para almacenar la lista de productos
  const [formData, setFormData] = useState({ name: "", price: "", category: "" });  //estado para almacenar los datos del formulario
  const [editProduct, setEditProduct] = useState(null); //para gestionar la edicion

  useEffect(() => { //cargar los productos desde el local storage
    const data = getProductsFromStorage();  //obtenemos los productos del local storage
    setProducts(data);  //actualizamos el estado con los productos obtenidos
  }, []);

  const handleChange = (e) => {  //actualizar los datos del formulario
    const { name, value } = e.target;  //obtenemos el nombre y el valor del input
    setFormData(prev => ({ ...prev, [name]: value }));  //actualizamos el estado del formulario
  };

  const handleCreate = () => {  //crear un nuevo producto
    const newProduct = {  //creamos un nuevo producto
      id: Date.now(),   //generamos un id unico
      ...formData,   //copiamos los datos del formulario
      price: Number(formData.price)  //convertimos el precio a numero
    };
    const updated = [...products, newProduct];  //actualizamos la lista de productos
    setProducts(updated);   //actualizamos el estado con la nueva lista
    setFormData({ name: "", price: "", category: "" });  //limpiamos el formulario
  };

  const handleDelete = (id) => {  //eliminar un producto
    const updated = products.filter(p => p.id !== id);  //filtramos la lista de productos
    setProducts(updated);  //actualizamos el estado con la nueva lista
  };

  const handleEdit = (id) => { //editar un producto
    const productToEdit = products.find(p => p.id === id); //buscamos el producto a editar
    setEditProduct(productToEdit);  //actualizamos el estado con el producto a editar
    setFormData({  //actualizamos el formulario con los datos del producto a editar
      name: productToEdit.name,  
      price: productToEdit.price,
      category: productToEdit.category
    });
  };

  const handleSaveEdit = () => {  //guardar los cambios de la edicion
    const updatedProducts = products.map(product =>  //actualizamos la lista de productos
      product.id === editProduct.id ? { ...product, ...formData, price: Number(formData.price) } : product  
    );
    setProducts(updatedProducts);  //actualizamos el estado con la nueva lista
    setEditProduct(null);  //limpiamos el estado de edicion
    setFormData({ name: "", price: "", category: "" });  //limpiamos el formulario
  };

  return (
    <>
      <ProductForm 
        formData={formData} 
        onChange={handleChange} 
        onCreate={handleCreate} 
        onSaveEdit={handleSaveEdit} 
        isEditing={editProduct !== null} 
      />
      <ProductsView 
        products={products} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </>
  );
};

export default ProductsPage;
