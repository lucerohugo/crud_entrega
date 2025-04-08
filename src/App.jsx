//App.jsx
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Card title="Gestor de Unicornios" style={{ width: '25rem', textAlign: 'center' }}>
        <p>Bienvenido al sistema de gestión de unicornios.</p>
        <Link to="/unicornios">
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

export default App;
