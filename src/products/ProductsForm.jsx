import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ProductForm = ({ formData, onChange, onCreate, onSaveEdit, isEditing }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onSaveEdit(); // Si estamos editando, guardamos los cambios
    } else {
      onCreate(); // Si estamos creando, agregamos el nuevo producto
    }
  };

  return (
    <div className="p-4">
      <h2> Gestión de Unicornios </h2>
    <div className="p-fluid p-formgrid p-grid">
      <div className="p-field p-col-12 p-md-4">
        <InputText
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Nombre"
        />
      </div>
      <div className="p-field p-col-12 p-md-4">
        <InputText
          name="price"
          value={formData.price}
          onChange={onChange}
          placeholder="Precio"
        />
      </div>
      <div className="p-field p-col-12 p-md-4">
        <InputText
          name="category"
          value={formData.category}
          onChange={onChange}
          placeholder="Categoría"
        />
      </div>
      <div className="p-field p-col-12 p-md-12">
        <Button 
          label={isEditing ? "Guardar Cambios" : "Agregar Producto"} 
          icon="pi pi-plus" 
          onClick={handleSubmit} 
        />
      </div>
    </div>
    </div>
  );
};

export default ProductForm;