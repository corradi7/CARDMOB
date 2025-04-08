import React from 'react';

const ProductCard = ({ nome, preco }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '250px', margin: '10px' }}>
      <h3>{nome}</h3>
      <p><strong>Preço:</strong> R$ {preco.toFixed(2)}</p>
      <button 
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => alert(`Produto "${nome}" adicionado ao carrinho!`)} // Ação temporária
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;