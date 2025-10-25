'use client'
import { createContext, ReactElement, useState} from "react"
export type ProdutoType = {
  sku: string,
  nome: string,
  descricao: string,
  preco: number
  imagem: string;
}

const Inicio: ProdutoType[] = [
  {
      "sku": "pao1",
      "nome": "Pão Tradicional",
      "descricao": "O clássico",
      "preco": 5,
      "imagem" : '/paotradicional.jpg'
    },
    {
      "sku": "pao2",
      "nome": "Pão Australiano",
      "descricao": "Um pouco mais chique",
      "preco": 6,
      "imagem" : "/paoaustraliano.jpg"
    },
    {
      "sku": "pao3",
      "nome": "Pão de sal",
    "descricao": "Para o dia a dia",
      "preco": 4,
      "imagem" : '/paodesal.jpg'
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