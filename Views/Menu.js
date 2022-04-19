import React,{useContext,useEffect} from 'react';
import { Text, View ,Image,ScrollView, FlatList, StyleSheet,Pressable } from 'react-native';
import FirebaseContext from '../Context/Firebase/firebaseContext';
import globalStyles from '../styles/global';
import PedidoContext from '../Context/pedidos/pedidoContext';
import {useNavigation} from '@react-navigation/native'


const Menu = () => {
   const {obtenerProductos,menu} = useContext(FirebaseContext);
   const  {seleccionarPlatillo} = useContext(PedidoContext);
   const navigation = useNavigation();
   console.log(menu);
      useEffect(()=>{
          obtenerProductos();
      },[]);

      const mostrarHeading = (categoria,i) =>{
         if(i>0){
            const categoriaAnterior = menu[i-1].categoria;
            if(categoriaAnterior !== categoria){
  
              return (
                <View style={styles.separador}>
                  <Text style={styles.textoSeparador}>{categoria}</Text>
                </View>
              )
            }
         }else {
          return (
            <View style={styles.separador}>
              <Text style={styles.textoSeparador}>{categoria}</Text>
            </View>
          )
         }
       
      }

  return (
      <View style = {globalStyles.contenedor}>
     
        <View style={{backgroundColor : "#eef",flex : 1}}>
          <FlatList
            data={menu}
            keyExtractor ={(item) => item.id}
            renderItem = {({item,index})=>(
              <>
                 {mostrarHeading(item.categoria,index)}
                 <Pressable onPress={()=>{ seleccionarPlatillo(item); navigation.navigate("DetallePlatillo")}} >
                 <View key={item.id} style={styles.targeta} >
                  <Image style = {{width : 82 , height : 82, borderRadius : 20, marginRight : 2, marginBottom : 5}} source={{uri : item.imagen}} />
                   <View>
                   <Text style={styles.nombre}>{item.nombre}</Text>
                    <Text style ={styles.desc}>{item.descripcion}</Text>
                    <Text style = {styles.precio}>Precio : {item.precio} $</Text>
                   </View>
                </View>
                 </Pressable>
              </>
            )}
          />
       

        </View>

      </View>
  )
}

const styles = StyleSheet.create({
  targeta : {
    flex: 1,
    borderBottomColor : "#666",
    borderBottomWidth : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    marginVertical : 8
    

  },
   separador : {
      marginTop : 2,
      backgroundColor : '#000',   
      height : 25,
     
      
   },
   textoSeparador : {
       color: "#ffda00",
       fontWeight : 'bold',
       textTransform : 'uppercase',
       textAlign : 'center'
   },
  contenedor : {
     flex: 1,
     width: 100
     
  },
  nombre : {
    fontSize : 18,
    marginVertical : 2,
    marginHorizontal : 10,
    fontWeight : 'bold',
    color:  "#001"
  },
  desc :{
    
 
    color: "#222",
    marginHorizontal: 8,
    paddingHorizontal : 5
    
 
  },
  precio : {
     color: '#000',
     fontWeight : 'bold',
     marginLeft : 10,
     marginVertical : 5
     
  }
})

export default Menu