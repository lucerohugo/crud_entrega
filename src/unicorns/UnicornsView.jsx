//Componente de presentación: renderiza la tabla, botones, formularios
//UnicornsView.jsx

import { DataTable } from 'primereact/datatable';  // Componente de tabla
import { Column } from 'primereact/column';        // Componente de columna
import { InputText } from 'primereact/inputtext';  // Componente de input
import { Button } from 'primereact/button';        // Componente de boton

const UnicornsView = ({
  unicorns,
  formData,
  onChange,
  onCreate,
  onDelete,
  onEdit,
  onUpdate,
  editingId
}) => {
  return (
    <div className="p-4">
      <h2> Gestion de Unicornios </h2>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-4">
          <InputText name="name" value={formData.name} onChange={onChange} placeholder="Nombre" />
        </div>
        <div className="p-field p-col-12 p-md-4">
          <InputText name="color" value={formData.color} onChange={onChange} placeholder="Color" />
        </div>
        <div className="p-field p-col-12 p-md-4">
          <InputText name="age" value={formData.age} onChange={onChange} placeholder="Edad" />
          <div className="p-field p-col-12 p-md-4">
          <InputText name="power" value={formData.power} onChange={onChange} placeholder="Poder" />
        </div>

        </div>
        <div className="p-field p-col-12 p-md-4">
          {editingId ? (
            <Button label="Actualizar" icon="pi pi-check" onClick={onUpdate} />
          ) : (
            <Button label="Crear" icon="pi pi-plus" onClick={onCreate} />
          )}
        </div>
      </div>

      <DataTable value={unicorns} paginator rows={5} className="mt-4">
        <Column field="name" header="Nombre" />
        <Column field="color" header="Color" />
        <Column field="age" header="Edad" />
        <Column field="power" header="Poder" />
        <Column
          header="Acciones"
          body={(rowData) => (
            <>
              <Button icon="pi pi-pencil" className="p-button-sm p-mr-2" onClick={() => onEdit(rowData)} />
              <Button icon="pi pi-trash" className="p-button-sm p-button-danger" onClick={() => onDelete(rowData._id)} />
            </>
          )}
        />
      </DataTable>
    </div>
  );
};

export default UnicornsView;
