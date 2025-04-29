import { Routes, Route, useNavigate } from "react-router-dom";
import UnicornsContainer from "./unicorns/UnicornsContainer";
import ProductsPage from "./products";
import { UnicornProvider } from "./context/UnicornContext";
import HomeView from "./home/HomeView";
import { Button } from "primereact/button";
import "./App.css"; 

function App() {
  const navigate = useNavigate();  // Hook de React Router para la navegación

  return (
    <div className="p-4">
      <nav>
        <Button 
          label="Inicio" 
          icon="pi pi-home" 
          onClick={() => navigate('/')} 
          className="nav-button"
        />
        <Button 
          label="Unicornios" 
          icon="pi pi-crown" 
          onClick={() => navigate('/unicorns')} 
          className="nav-button"
        />
        <Button 
          label="Productos" 
          icon="pi pi-shopping-cart" 
          onClick={() => navigate('/products')}
        />
      </nav>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="unicorns"
          element={
            <UnicornProvider>
              <UnicornsContainer />
            </UnicornProvider>
          }
        />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
