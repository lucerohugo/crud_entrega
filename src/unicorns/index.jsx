import { UnicornProvider } from "../context/UnicornContext";
import UnicornsContainer from "./UnicornsContainer";


const UnicornsWrapper = () => { // Componente que envuelve el contenedor de unicornios con el proveedor de contexto
  return (
    <UnicornProvider>
      <UnicornsContainer />
    </UnicornProvider>
  );
};

export default UnicornsWrapper;
