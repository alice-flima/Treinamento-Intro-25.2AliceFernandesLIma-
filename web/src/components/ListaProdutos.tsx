import React from "react";
import useProdutos from "./produtohook";
import ProdutoCard from "./produtocard";

const ListaProdutos = () => {
  const { produtos } = useProdutos();

  return (
    <main className="flex items-center gap-2 flex-wrap justify-center">
      {produtos.map(produto => (
        <ProdutoCard key={produto.sku} produto={produto} />
      ))}
    </main>
  );
};


export default ListaProdutos;

