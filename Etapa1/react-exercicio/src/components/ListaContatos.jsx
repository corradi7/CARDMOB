import React, { useState } from 'react';
import Contato from './Contato';

const ListaContatos = () => {
  const [contatos, setContatos] = useState([
    { id: 1, nome: 'João Silva', telefone: '(11) 98765-4321' },
    { id: 2, nome: 'Maria Oliveira', telefone: '(21) 91234-5678' },
  ]);

  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [editandoId, setEditandoId] = useState(null); // ID do contato que está sendo editado

  // Adicionar um novo contato
  const adicionarContato = () => {
    if (novoNome && novoTelefone) {
      const novoContato = {
        id: contatos.length + 1,
        nome: novoNome,
        telefone: novoTelefone,
      };
      setContatos([...contatos, novoContato]);
      setNovoNome('');
      setNovoTelefone('');
    }
  };

  // Remover um contato
  const removerContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  // Iniciar edição de um contato
  const iniciarEdicao = (id) => {
    const contato = contatos.find((contato) => contato.id === id);
    if (contato) {
      setEditandoId(id);
      setNovoNome(contato.nome);
      setNovoTelefone(contato.telefone);
    }
  };

  // Salvar edição de um contato
  const salvarEdicao = () => {
    setContatos(
      contatos.map((contato) =>
        contato.id === editandoId
          ? { ...contato, nome: novoNome, telefone: novoTelefone }
          : contato
      )
    );
    setEditandoId(null);
    setNovoNome('');
    setNovoTelefone('');
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nome"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={novoTelefone}
          onChange={(e) => setNovoTelefone(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        {editandoId ? (
          <button onClick={salvarEdicao}>Salvar</button>
        ) : (
          <button onClick={adicionarContato}>Adicionar Contato</button>
        )}
      </div>
      {contatos.map((contato) => (
        <div key={contato.id} style={{ marginBottom: '10px' }}>
          <Contato nome={contato.nome} telefone={contato.telefone} />
          <button onClick={() => iniciarEdicao(contato.id)} style={{ marginRight: '10px' }}>
            Editar
          </button>
          <button onClick={() => removerContato(contato.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default ListaContatos;