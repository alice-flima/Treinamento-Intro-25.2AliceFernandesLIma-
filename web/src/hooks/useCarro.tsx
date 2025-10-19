import {useContext} from "react"
import {CarroContext} from "../Context/CarroProvider"
import { useCarroContextType } from "../Context/CarroProvider"
const useCarro = (): useCarroContextType => {
  return useContext(CarroContext)
}
export default useCarro