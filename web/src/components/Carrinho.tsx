import useCarro from "../hooks/useCarro";
import { CarroItemType } from "../Context/CarroProvider"; 
import React from "react";

const Carrinho = () => {
  const { carro, itens, valor, dispatch, Reducer_Action } = useCarro(); 

  const total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  }).format(valor);

  const content = (
    <div className="carrinho-popup">
      <h2>Carrinho</h2>
      {itens === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <p>Itens Totais: {itens}</p>
          <p>Valor Total: {total}</p>

          <ul className="carrinho-lista">
            {carro.map((item: CarroItemType) => (
              <li key={item.sku} className="carrinho-item">
                <p>{item.nome} x {item.quantidade}</p>
                <button 
                  onClick={() => dispatch({
                    type: Reducer_Action.QUANTIDADE, 
                    payload: {...item, quantidade: item.quantidade - 1}
                  })}
                >
                  -
                </button>
                <button 
                  onClick={() => dispatch({
                    type: Reducer_Action.QUANTIDADE, 
                    payload: {...item, quantidade: item.quantidade + 1}
                  })}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
          <button className="checkout-button">Finalizar Compra</button>
        </>
      )}
    </div>
  );

  return content;
};

export default Carrinho;