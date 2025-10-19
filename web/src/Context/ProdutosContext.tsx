///import { init } from "next/dist/compiled/webpack/webpack"
import { createContext, ReactElement, useState} from "react"
export type ProdutoType = {
  sku: string,
  nome: string,
  descricao: string,
  preco: number
}

const Inicio: ProdutoType[] = [
  {
      "sku": "pao1",
      "nome": "Pão Tradicional",
      "descricao": "O clássico",
      "preco": 5
    },
    {
      "sku": "pao2",
      "nome": "Pão Australiano",
      "descricao": "Um pouco mais chique",
      "preco": 6
    }
]

export type UseProdutosContextType = {produtos: ProdutoType[]}

const ContextoInicial: UseProdutosContextType = {produtos: []}
const ProdutosContext = createContext<UseProdutosContextType>(ContextoInicial)

type ChildrenType = { children?: ReactElement}

export const ProdutoProvider = ({children}: ChildrenType): ReactElement => {
  const [produtos, setProdutos] = useState<ProdutoType[]>(Inicio)
  return(
    <ProdutosContext.Provider value={{produtos}}>
    {children}
    </ProdutosContext.Provider>
  )
}

export default ProdutosContext