import React, {useContext} from 'react';
import UnicornsView from './UnicornsView';
import { UnicornContext } from '../context/UnicornContext';

const UnicornsContainer = () => {  // Componente contenedor que gestiona la lógica de los unicornios
  const {
    unicorns, createUnicorn, editUnicorn, deleteUnicorn
  } = useContext(UnicornContext);

  return (
    <UnicornsView
      unicorns={unicorns}
      createUnicorn={createUnicorn}
      editUnicorn={editUnicorn}
      deleteUnicorn={deleteUnicorn}
    />
  );
};

export default UnicornsContainer;
