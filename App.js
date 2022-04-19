import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import NuevaOrden from './Views/NuevaOrden';
import Menu from './Views/Menu';
import Resumen from './Views/Resumen';
import FormularioPlatillo from './Views/FormularioPlatillo';
import ProgresoPedido from './Views/ProgresoPedido';
import DetallePlatillo from './Views/DetallePlatillo';
import FirebaseState from './Context/Firebase/firebaseState';
import PedidoState from './Context/pedidos/pedidoState';


const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
    <>
    <FirebaseState>
      <PedidoState>

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle : {
                backgroundColor : '#ffda01'
                
              },
              headerTitleStyle :{
                fontWeight : 'bold'
              },
              headerTitleAlign : 'center'
            }}
            >
              <Stack.Screen  name='NuevaOrden' component={NuevaOrden} options={{title : "Nueva Orden"}} />
              <Stack.Screen  name='Menu' component={Menu} options= {{title : "Nuestro Menu"}} />
              <Stack.Screen  name='DetallePlatillo' component={DetallePlatillo} options={{title : "Detalle Platillo"}}/>
              <Stack.Screen  name='FormularioPlatillo'  component={FormularioPlatillo} options={{title : "Ordenar Platillo"}} />
              <Stack.Screen  name = 'Resumen' component={Resumen} options ={{title : "Resumen Pedido"}}/>
              <Stack.Screen  name='ProgresoPedido' component={ProgresoPedido} options={{title : "Progreso Pedido"}}/>

            </Stack.Navigator>
          </NavigationContainer>
         </PedidoState>
     </FirebaseState>
    </>
  );
};



export default App;
