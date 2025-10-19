import { useReducer, useMemo, createContext, Dispatch, ReactNode, useContext } from "react"

export type CarroItemType = {
  sku: string,
  nome: string,
  preco: string,
  quantidade: number
}

type EstadoCarroType = { carro: CarroItemType[]}

const CarroInicial: EstadoCarroType = {carro:[]}
const Reducer_ActionType = {
  ADICIONAR : "ADICIONAR",
  REMOVER : "REMOVER",
  QUANTIDADE: "QUANTIDADE"
}

export type ReducerActionType = typeof Reducer_ActionType
export type ReducerAction = {
  type: string,
  payload: CarroItemType
}
const reducer = (state: EstadoCarroType, action: ReducerAction): 
EstadoCarroType => {
  switch(action.type){
    case Reducer_ActionType.ADICIONAR:{
      const {sku, nome, preco} = action.payload
      const itemMudar = state.carro.find(item => item.sku === sku);
      if (itemMudar) {
        return {
          ...state,
          carro: state.carro.map(item =>
            item.sku === sku
              ? { ...item, quantidade: item.quantidade + 1 }
              : item
          )
        };
      } else{
        return{
          ...state, carro: [...state.carro, {sku, nome, preco, quantidade: 1}]
        }
      }
  }
  case Reducer_ActionType.REMOVER: {
    const {sku, nome, preco} = action.payload
      const itemMudar = state.carro.find(item => item.sku === sku);
      if (itemMudar) {
        if(itemMudar.quantidade>1){

        
        return {
          ...state,
          carro: state.carro.map(item =>
            item.sku === sku
              ? { ...item, quantidade: item.quantidade - 1 }
              : item
          )
        };
      } else{
        const novoCarro = state.carro.filter(item => item.sku !== sku)
        return{
          ...state, carro: novoCarro
      }
      }
  }
  return state
}
  case Reducer_ActionType.QUANTIDADE: {
    const {sku, quantidade} = action.payload
      const itemMudar = state.carro.find(item => item.sku === sku);
    if (itemMudar) {
      const AtualizaItem: CarroItemType = {...itemMudar, quantidade}  
      if(quantidade>0){
      return {
          ...state,
          carro: state.carro.map(item =>
            item.sku === sku
              ? { ...item, quantidade: quantidade }
              : item
          )
        };
      }
      else{
        const novoCarro = state.carro.filter(item => item.sku !== sku)
        return{
          ...state, carro: novoCarro
      }
}
}
return state
}default:{
    return state
}
}
}

const useCarroContext = (CarroInicial: EstadoCarroType) => {
  const [state, dispatch] = useReducer(reducer, CarroInicial)
  const Reducer_Action = useMemo(() => {
    return Reducer_ActionType
  }, [])
  const itens = state.carro.reduce((previousValue: number, itemMudar: CarroItemType) => {
    return previousValue + itemMudar.quantidade
  }, 0)

  const valor = state.carro.reduce((previousValue: number, itemMudar: CarroItemType) => {
    const precoNumber = Number(itemMudar.preco)
    return previousValue + (isNaN(precoNumber) ? 0 : precoNumber * itemMudar.quantidade)
  }, 0)

  return { dispatch, Reducer_Action, itens, valor, carro: state.carro }
}
export type useCarroContextType = ReturnType<typeof useCarroContext>
 const InicioCarroContexto: useCarroContextType = {
  dispatch: (() => {}) as Dispatch<ReducerAction>, 
  Reducer_Action: Reducer_ActionType,
  itens:0,
  valor: 0,
  carro: [],
}

 export const CarroContext = createContext<useCarroContextType>(InicioCarroContexto)
  type CarroProviderProps = { children: ReactNode }
  export const CarroProvider = ({ children }: CarroProviderProps) => {
    const valorCarroContext = useCarroContext(CarroInicial);
    return(
      <CarroContext.Provider value={valorCarroContext}>
        {children}
      </CarroContext.Provider>
    )
  }

export default CarroProvider;