import {StyleSheet} from 'react-native';



const globalStyles = StyleSheet.create({
     contenedor : {
         flex: 1,
         marginHorizontal : '2.5%',
         justifyContent : 'center'
     },
     boton : {
         backgroundColor : '#ffda00',
         marginHorizontal : '2.5%',
         height: 40,
         borderRadius : 15
     } ,

     textoBtn : {
         textTransform : 'uppercase',
         fontWeight : 'bold',
         color:  '#001',
         textAlign : 'center',
         marginVertical : 7,
         fontSize : 16
         
         
     },
     
     
})


export default globalStyles;