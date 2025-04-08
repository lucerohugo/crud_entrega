// Lógica del CRUD: llamadas a la API, estados, handlers
//UnicornsContainer.jsx

import { useEffect, useState } from 'react';
import UnicornsView from './UnicornsView';

const API_URL = 'https://crudcrud.com/api/5c2b6064eb804d01bca59e529478c171/unicorns';

const UnicornsContainer = () => {
  const [unicorns, setUnicorns] = useState([]);
  const [formData, setFormData] = useState({ name: '', color: '', age: '', power: '' });
  const [editingId, setEditingId] = useState(null);
  


  const fetchUnicorns = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUnicorns(data);
    } catch (error) {
      console.error('Error fetching unicorns', error);
    }
  };

  useEffect(() => {
    fetchUnicorns();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    if (!formData.name || !formData.color || !formData.age) return;
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', color: '', age: '' , power: '' });
      fetchUnicorns();
    } catch (error) {
      console.error('Error creating unicorn', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchUnicorns();
    } catch (error) {
      console.error('Error deleting unicorn', error);
    }
  };

  const handleEdit = (unicorn) => {
    setFormData(unicorn);
    setEditingId(unicorn._id);
  };

  const handleUpdate = async () => {
    try {
      await fetch(`${API_URL}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          color: formData.color,
          age: formData.age,
          power: formData.power,
        }),
      });
      setEditingId(null);
      setFormData({ name: '', color: '', age: '' , power: '' });
      fetchUnicorns();
    } catch (error) {
      console.error('Error updating unicorn', error);
    }
  };

  return (
    <UnicornsView
      unicorns={unicorns}
      formData={formData}
      onChange={handleInputChange}
      onCreate={handleCreate}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onUpdate={handleUpdate}
      editingId={editingId}
    />
  );
};

export default UnicornsContainer;
