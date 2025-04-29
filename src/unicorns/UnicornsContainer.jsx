import React from 'react';
import UnicornsView from './UnicornsView';
import useUnicornForm from './useUnicornForm';

const UnicornsContainer = () => {  // Componente contenedor que gestiona la lógica de los unicornios
  const {
    unicorns,
    formData,
    editingId,
    onChange,
    onCreate,
    onEdit,
    onUpdate,
    onDelete
  } = useUnicornForm();

  return (
    <UnicornsView
      unicorns={unicorns}
      formData={formData}
      editingId={editingId}
      onChange={onChange}
      onCreate={onCreate}
      onEdit={onEdit}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />
  );
};

export default UnicornsContainer;
