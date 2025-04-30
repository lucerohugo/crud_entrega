import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import UnicornForm from './UnicornsForm';

const UnicornsView = ({  //componente para mostrar la lista de unicornios
  unicorns, createUnicorn, editUnicorn, deleteUnicorn
}) => {
  const[editingId, setEditingId] = useState(null); //estado para almacenar el id del unicornio que estamos editando
  const[formData, setFormData] = useState({}); //estado para almacenar los datos del formulario
  const onDelete = (id) => {  //manejo del evento de eliminacion
    deleteUnicorn(id);  //eliminamos el unicornio
  }
  
  
  const onEdit = (rowData) => {  //manejo del evento de edicion
    setEditingId(rowData._id);  //actualizamos el id del unicornio a editar
    setFormData(rowData);  //actualizamos los datos del formulario
  }
  
  return (
    <div className="p-4">
      <h2>Gestión de Unicornios</h2>

      <UnicornForm 
      createUnicorn={createUnicorn}
      editUnicorn={editUnicorn}
      deleteUnicorn={deleteUnicorn}
      editingId={editingId}
      formData={formData}
      />

          <h2>Lista de Unicornios</h2>
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
