type PropsType = {
  verCarrinho : boolean,
  setVerCarrinho: React.Dispatch<React.SetStateAction<boolean>>

}

const Nav = () => ({verCarrinho, setVerCarrinho}: PropsType) => {
  const button = verCarrinho ? <button onClick={() => setVerCarrinho(false)}>Itens</button>
  :
  <button onClick= {() => setVerCarrinho(true)}>Ver Carrinho</button>
  const content = (
    <nav className = "nav">
    {button}
    </nav>
  )
  return (
    content 
  )
}
export default Nav