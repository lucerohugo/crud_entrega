import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UnicornContext = createContext(); // contexto para compartir datos de unicornios

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]); // estado para almacenar la lista de unicornios

  const API_URL = 'https://crudcrud.com/api/6cea492fb44e49da9ee528dcf97a3f1c/unicorns'; // url de mi api

  const getUnicorns = async () => { // obtenemos los unicornios
    try {
      const response = await axios.get(API_URL);
      setUnicorns(response.data); // axios ya da la respuesta parseada como json en response.data en su momento
    } catch (error) {
      console.error("Error al obtener unicornios:", error);
    }
  };

  const createUnicorn = async (unicorn) => { // creamos un nuevo unicornio
    try {
      await axios.post(API_URL, unicorn);
      await getUnicorns();
    } catch (error) {
      console.error("Error al crear unicornio:", error);
    }
  };

  const editUnicorn = async (id, unicorn) => { // editamos un unicornio
    try {
      await axios.put(`${API_URL}/${id}`, unicorn);
      await getUnicorns();
    } catch (error) {
      console.error("Error al editar unicornio:", error);
    }
  };

  const deleteUnicorn = async (id) => { // eliminamos un unicornio
    try {
      await axios.delete(`${API_URL}/${id}`);
      await getUnicorns();
    } catch (error) {
      console.error("Error al eliminar unicornio:", error);
    }
  };

  useEffect(() => { // cargamos los unicornios al iniciar la aplicacion
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider value={{ unicorns, getUnicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};

