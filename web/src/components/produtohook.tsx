import { useContext } from "react";
import ProdutosContext, { UseProdutosContextType } from "../Context/ProdutosContext"; 
const useProdutos = (): UseProdutosContextType => {
  return useContext(ProdutosContext);
};

export default useProdutos;