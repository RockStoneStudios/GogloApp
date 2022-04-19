import React from 'react'
import { Text, View , StyleSheet ,Button, TouchableOpacity } from 'react-native'
import globalStyles from '../styles/global'
import {useNavigation} from '@react-navigation/native';



const NuevaOrden = () => {
  const navigation = useNavigation();
  return (
      <View style={globalStyles.contenedor}>
         <TouchableOpacity
          onPress={()=> navigation.navigate('Menu')} 
         style={globalStyles.boton}>
           <Text style={globalStyles.textoBtn}>Crear Nueva Orden</Text>           
         </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    
})

export default NuevaOrden