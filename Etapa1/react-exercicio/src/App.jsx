import { useState } from 'react';
import './App.css';
import Contato from './components/Contato'; // Importando o componente Contato
import ListaContatos from './components/ListaContatos';

function App() {
  return (
    <div>
      <ListaContatos />
    </div>
  );
}

export default App;