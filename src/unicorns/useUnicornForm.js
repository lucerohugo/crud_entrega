//hook de la logica que tenia en UnicornContainer lo deje mas limpio aca
import { useState } from 'react';
import { useContext } from 'react';
import { UnicornContext } from '../context/UnicornContext';

const useUnicornForm = () => {   //hook para gestionar la logica de los unicornios
  const { unicorns, createUnicorn, deleteUnicorn, editUnicorn } = useContext(UnicornContext);  //contexto de unicornios

  const [formData, setFormData] = useState({ //estado para almacenar los datos del formulario
    name: '',
    color: '',
    age: '',
    power: ''
  });

  const [editingId, setEditingId] = useState(null);  //estado para almacenar el id del unicornio que estamos editando

  const handleChange = (e) => {   //actualizar los datos del formulario
    const { name, value } = e.target;   //obtenemos el nombre y el valor del input
    setFormData(prev => ({ ...prev, [name]: value }));  //actualizamos el estado del formulario
  };

  const handleCreate = async () => {  //crear un nuevo unicornio
    if (!formData.name || !formData.color || !formData.age || !formData.power) return;  //validar que todos los campos esten llenos
    await createUnicorn(formData);  //crear el unicornio
    setFormData({ name: '', color: '', age: '', power: '' });  //limpiar el formulario
  };

  const handleEdit = (unicorn) => {  //editar un unicornio
    setFormData({  //actualizamos el formulario con los datos del unicornio a editar
      name: unicorn.name,  
      color: unicorn.color,
      age: unicorn.age,
      power: unicorn.power
    });
    setEditingId(unicorn._id);  //actualizamos el estado con el id del unicornio a editar
  };

  const handleUpdate = async () => {  //guardar los cambios de la edicion
    if (!editingId) return;   //validar que estemos editando
    await editUnicorn(editingId, formData);  //actualizar el unicornio
    setFormData({ name: '', color: '', age: '', power: '' });  //limpiar el formulario
    setEditingId(null);  //limpiar el estado de edicion
  };

  const handleDelete = async (id) => {  //eliminar un unicornio
    await deleteUnicorn(id);  //eliminar el unicornio
  };

  return {  //estado y funciones que retornamos
    unicorns,
    formData,
    editingId,
    onChange: handleChange,
    onCreate: handleCreate,
    onEdit: handleEdit,
    onUpdate: handleUpdate,
    onDelete: handleDelete
  };
};

export default useUnicornForm;
