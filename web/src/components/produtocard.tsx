import React from 'react';
import { ProdutoType } from  '../Context/ProdutosContext';
import useCarro from "../hooks/useCarro";
;

type PropsType = {
  produto: ProdutoType;
};

const ProdutoCard = ({ produto }: PropsType) => {
  const { dispatch, Reducer_Action } = useCarro(); 

  const preco = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  }).format(produto.preco);
  const handleAdicionar = () => {
    const payload = {
      sku: produto.sku,
      nome: produto.nome,
      preco: produto.preco.toString(), 
      quantidade: 1, 
    };

    dispatch({
      type: Reducer_Action.ADICIONAR,
      payload: payload,
    });
  };
  
  const handleRemover = () => {
     const payload = {
        sku: produto.sku,
        nome: produto.nome,
        preco: produto.preco.toString(), 
        quantidade: 1, 
    };
     
    dispatch({
        type: Reducer_Action.REMOVER, 
        payload: payload,
    });
  }
  return ( <div className="produto-card grid grid-cols-2 gap-4 p-4 border rounded-lg shadow-md">
      <h3>{produto.nome}</h3> 
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem w-32 h-32 object-cover" />
      <p>{produto.descricao}</p>
      <p>Preço: {preco}</p>
      
      <button onClick={handleAdicionar}>Adicionar ao Carrinho</button>
      <button onClick={handleRemover}>Remover do Carrinho</button>
    </div>
  );
};
export default ProdutoCard;