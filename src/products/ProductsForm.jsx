import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ProductForm = ({ formData, onChange, onCreate, onSaveEdit, isEditing }) => { //componente para el formulario de productos
  const handleSubmit = (e) => {  //manejo del evento de envio del formulario
    e.preventDefault();  //previene el comportamiento por defecto del formulario
    if (isEditing) {   //sii estamos editando, llamamos a la funcion de guardar cambios
      onSaveEdit(); //guardamos los cambios
    } else {
      onCreate(); // Sino agregamos el nuevo producto
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