import React from "react";
import Nav from "./Nav";
import LandingPagesNav from "./nav/InitialNav"; 
import useCarro from "../hooks/useCarro";

type NavProps = {
  verCarrinho: boolean;
  setVerCarrinho: React.Dispatch<React.SetStateAction<boolean>>;
}
type PropsType = {
  verCarrinho : boolean,
  setVerCarrinho: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({verCarrinho, setVerCarrinho}: PropsType) => {
  const { itens, valor } = useCarro(); 
  const total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  }).format(valor);
  return (
    <header className="header">
      <Nav verCarrinho={verCarrinho} setVerCarrinho={setVerCarrinho} />
      <div>
        <p>Itens: {itens}</p>   
        <p>Total: {total}</p>  
      </div>
    </header>
  )
}
export default Header