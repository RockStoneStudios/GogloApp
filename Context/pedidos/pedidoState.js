import React, {useReducer} from "react";

import pedidoReducer from "./pedidoReducer";
import PedidoContext from "./pedidoContext";
import { SELECCIONAR_PRODUCTO } from "../../types";

const PedidoState = props => {
    
    const initialState = {
         pedido : [],
         platillo : null
    }

    const [state,dispatch] = useReducer(pedidoReducer,initialState);
     // Selecciona Producto que el usuario desea ordernar
   
      const seleccionarPlatillo = (platillo) =>{
           dispatch({
               type : SELECCIONAR_PRODUCTO,
               payload : platillo
           })
      }

     return (
         <PedidoContext.Provider
            value={{
                pedido : state.pedido,
                seleccionarPlatillo,
                platillo : state.platillo
            }}
         >
             {props.children}
         </PedidoContext.Provider>
     )

}

export default PedidoState;