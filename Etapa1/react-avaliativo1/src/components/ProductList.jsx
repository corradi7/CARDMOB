import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [produtos, setProdutos] = useState([]);
  const [novoNome, setNovoNome] = useState('');
  const [novoPreco, setNovoPreco] = useState('');
  const [editandoId, setEditandoId] = useState(null);

  // Adicionar
  const adicionarProduto = () => {
    if (novoNome && novoPreco) {
      const novoProduto = {
        id: produtos.length + 1,
        nome: novoNome,
        preco: parseFloat(novoPreco),
      };
      setProdutos([...produtos, novoProduto]);
      setNovoNome('');
      setNovoPreco('');
    }
  };

  // Remover
  const removerProduto = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  // Edição
  const iniciarEdicao = (id) => {
    const produto = produtos.find((produto) => produto.id === id);
    if (produto) {
      setEditandoId(id);
      setNovoNome(produto.nome);
      setNovoPreco(produto.preco);
    }
  };

  // Salvar edição de um produto
  const salvarEdicao = () => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === editandoId
          ? { ...produto, nome: novoNome, preco: parseFloat(novoPreco) }
          : produto
      )
    );
    setEditandoId(null);
    setNovoNome('');
    setNovoPreco('');
  };

  return (
    <div>
      <h2>Gestão de Produtos</h2>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nome do Produto"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoPreco}
          onChange={(e) => setNovoPreco(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        {editandoId ? (
          <button onClick={salvarEdicao}>Salvar</button>
        ) : (
          <button onClick={adicionarProduto}>Adicionar Produto</button>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {produtos.length === 0 ? (
          <p>Nenhum produto adicionado ainda.</p>
        ) : (
          produtos.map((produto) => (
            <div key={produto.id}>
              <ProductCard nome={produto.nome} preco={produto.preco} />
              <button onClick={() => iniciarEdicao(produto.id)} style={{ marginRight: '10px' }}>
                Editar
              </button>
              <button onClick={() => removerProduto(produto.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;