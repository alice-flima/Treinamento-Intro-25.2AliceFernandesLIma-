import { useContext } from "react";
import { CarroContext } from "./CarroProvider";

const useCarro = () => {
  return useContext(CarroContext);
};

export default useCarro;