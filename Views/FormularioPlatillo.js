import React,{useState} from 'react'
import { Text,View, TouchableOpacity,StyleSheet,Dimensions } from 'react-native';
import globalStyle from '../styles/global';
import Icon  from 'react-native-vector-icons/Ionicons';

const FormularioPlatillo = () => {

  const [cantidad,setCantidad] = useState(1);
  const  windowWidt = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
     <View style={styles.contenedor}>
        <Text style={styles.titulo}>Cantidad</Text>
       <View style={styles.contenedorImagenes}>
          <View style={{ marginRight : 200 , width : 120, height : 100}}>
            <Text style={{backgroundColor : '#000',borderRadius : 10 ,marginHorizontal : 10, textAlign : 'center'}} >
               <Icon style={{}} color={"white"} size={50} name = "remove"/>
            </Text>
          </View>
         
          <View style={{ width : 120 , height : 100}}>
          <Text style={{backgroundColor : '#000', borderRadius : 10, marginHorizontal : 10, textAlign : 'center'}} >
               <Icon color={"white"} size={50} name = "add"/>
            </Text>
          </View>
       </View>
       <Text>{cantidad} , {windowWidt} , {windowHeight}</Text>
      
     </View>
  )
}


const styles = StyleSheet.create({
   contenedor : {
     flex: 1,
     alignItems : 'center'
   },
   titulo : {
      fontSize : 30,
      color:  '#110',
      marginTop : 20
   },
   contenedorImagenes : {
     flex: 1,
     flexDirection : 'row',
     alignItems : 'center'
     
   },
   remove : {
      
   }
})

export default FormularioPlatillo