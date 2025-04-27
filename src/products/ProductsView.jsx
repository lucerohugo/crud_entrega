import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const ProductsView = ({ products, onDelete, onEdit }) => (
  <div>
    <h2>Lista de Productos</h2>
    <DataTable value={products} paginator rows={5}>
      <Column field="name" header="Nombre" />
      <Column field="price" header="Precio" />
      <Column field="category" header="Categoría" />
      <Column
        header="Acciones"
        body={(rowData) => (
          <div>
            <Button
              icon="pi pi-pencil"
              className="p-button-warning p-button-sm"
              onClick={() => onEdit(rowData.id)} // Editar producto
            />
            <Button
              icon="pi pi-trash"
              className="p-button-danger p-button-sm"
              onClick={() => onDelete(rowData.id)} // Eliminar producto
            />
          </div>
        )}
      />
    </DataTable>
  </div>
);

export default ProductsView;
