import { createContext, useState, useEffect } from "react";

export const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const API_URL = 'https://crudcrud.com/api/2d4ee6caa4124296a4fbbfce5ab6bf3e/unicorns'; 

  const getUnicorns = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      setUnicorns(data);
    } catch (error) {
      console.error("Error al obtener unicornios:", error);
    }
  };

  const createUnicorn = async (unicorn) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(unicorn)
      });
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      await getUnicorns();
    } catch (error) {
      console.error("Error al crear unicornio:", error);
    }
  };

  const editUnicorn = async (id, unicorn) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(unicorn)
      });
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      await getUnicorns();
    } catch (error) {
      console.error("Error al editar unicornio:", error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      await getUnicorns();
    } catch (error) {
      console.error("Error al eliminar unicornio:", error);
    }
  };

  useEffect(() => {
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider value={{ unicorns, getUnicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
