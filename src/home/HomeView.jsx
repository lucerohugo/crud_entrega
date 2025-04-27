//este es mi componente de vista
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import '../App.css';
const HomeView = () => {
  return (
    <div className="home-container">
      <Card title="Gestor de Unicornios" className="home-card">
        <h2>Hugo Lucero</h2>
        <p>Bienvenido al sistema de gestión de unicornios.</p>
        <Link to="/unicorns">
          <Button 
            label="Ver Unicornios" 
            icon="pi pi-arrow-right" 
            className="p-button-primary" 
          />
        </Link>
      </Card>
      
    </div>
  );
};

export default HomeView;
