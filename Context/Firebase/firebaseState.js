import React,{useReducer} from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import {  OBTENER_PRODUCTOS_EXITO } from "../../types";
import firebase from '../../firebase/index';
import _ from 'lodash';
//creo state inicial


const FirebaseState = props =>{
    const initialState = {
        menu : []
    }
    
    // useReducer con dispatch para ejecutar las funciones
    
    const [state, dispatch] = useReducer(FirebaseReducer,initialState);
   
   //FUNCION QUE SE EJECUTA PARA OBTENER LOS PRODUCTOS

   const obtenerProductos = () => {
       try {

           firebase.db.settings({ experimentalForceLongPolling: true })
       }catch(error){
           console.log(error)
       }
       
        firebase.db
        .collection('productos')
        .where('existe', '==',true)
        .onSnapshot(manejarSnapshot);
        
           function manejarSnapshot(snapshot){
               let platillos = snapshot.docs.map(doc =>{
                   return {
                       id : doc.id,
                       ...doc.data()
                   }
               });
               platillos = _.sortBy(platillos,'categoria');
               dispatch({
                type : OBTENER_PRODUCTOS_EXITO,
                payload : platillos
              });
           }
   }
   
    return (
        <FirebaseContext.Provider
         value={{
             menu : state.menu,
             firebase,
             obtenerProductos
         }}
        >
           {props.children}
        </FirebaseContext.Provider>

    )
        
    
    
}


export default FirebaseState;