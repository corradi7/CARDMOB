import React from 'react';

const Contato = ({ nome, telefone }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', maxWidth: '300px' }}>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
    </div>
  );
};

export default Contato;