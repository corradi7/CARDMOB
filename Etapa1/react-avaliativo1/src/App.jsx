import React from 'react';
import './App.css';
import ProductList from './components/ProductList'; // Importando o componente ProductList

function App() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductList />
    </div>
  );
}

export default App;