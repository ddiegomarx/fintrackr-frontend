import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Componentes/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import exampleImage from './Images/logo.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        
        {/* Renderizando o componente Login */}
        <Login />
        {/* Fim da renderização do componente Login */}
       
      </header>
    </div>
  );
}

export default App;
