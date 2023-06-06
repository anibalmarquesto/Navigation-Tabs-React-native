import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import{StyleSheet} from 'react-native';
import { Button, } from 'react-native-paper';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Hola!</Text>
      <Text style={styles.subTitulo}>Inicia Sesión</Text>
      <TextInput 
      placeholder='Email:'
      style={styles.textInput}
      />
      <TextInput 
      placeholder='Password:'
      style={styles.textInput}
      />
      <Button buttonColor="green" mode="contained" onPress={() =>navigation.navigate("Home2")}>iniciar</Button>
    </View>
  );
}; 

export default HomeScreen1;

const styles = StyleSheet.create ({
conteiner: {
  flex: 1,
  backgroundColor:  "#f1f1f1",
  alignItems:'center',
  justifyContent:'center',
},
titulo:{
  fontSize:43,
color:'#000',
fontWeight:'bold',
},
subTitulo:{
  fontSize:18,
  color:'gray',
},
textInput:{
  borderWidth:1,
  borderBottomColor:'gray',
  width:80,
  padding:10,
  paddingStart:30,
  width:'80%',
  height:50,
  marginTop:20,
  borderRadius:30,
  marginBottom:20,
  backgroundColor:'#fff',
},

});