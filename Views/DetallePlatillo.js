import React,{useContext} from 'react'
import { Text, View , Button, StyleSheet,Image, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/global';
import PedidoContext from '../Context/pedidos/pedidoContext'
import { useNavigation } from '@react-navigation/native';


const DetallePlatillo = () => {
  const {platillo} = useContext(PedidoContext);
  const {nombre,imagen,descripcion,precio} = platillo;
  const navigation = useNavigation();
  
  return (
     <View style={styles.contenedor}>
       <View>
            <Text style={styles.titulo}>{nombre}</Text>
          <View style = {styles.targeta}>
              <Image style={styles.imagen} source={{uri : imagen}}/>
              <Text style ={styles.descripcion}>{descripcion}</Text>
              <Text style={styles.precio}>Precio : ${precio}</Text>
          </View>
       </View>
  
     <TouchableOpacity
       onPress={()=> navigation.navigate("FormularioPlatillo") }
     style={globalStyles.boton}>
       <Text style={globalStyles.textoBtn}>Ordenar PlatiLLo</Text>
     </TouchableOpacity>

     </View>
  )
}

const styles = StyleSheet.create({
   contenedor : {
      flex: 1
   },
    targeta :{
       
       
       shadowColor : '#000',
       shadowOffset : {
         width: 1,
         height: 2
       },
       shadowOpacity : 0.96,
       shadowRadius : 3.85,
       elevation : 5
    },
   imagen : {
     width: '90%',
     height: 300,
     marginHorizontal : '5%',
     borderRadius : 10,
     marginVertical :10
     
   },

  titulo : {
    textAlign : 'center',
    marginTop : 40,
    marginBottom : 20,
    fontSize : 30,
    color: '#111'
  },
  descripcion : {
    color: '#112',
    marginTop : 5,
    paddingHorizontal : 20,
    fontSize : 16,
    marginHorizontal : 10
  },
  precio : {
     marginVertical : 20,
     textAlign : 'center',
     fontSize : 24,
     fontWeight : 'bold',
     color:  "#001"
  }
})

export default DetallePlatillo