import { View, Text, } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, Button, Paragraph } from 'react-native-paper';

const SettingsScreen2 = () => {

  const navigation = useNavigation();
  return (
    <Card>
      <Card.Cover source={{ uri: 'https://cdn-italiani-media.italiani.it/site-tucuman/sites/95/2020/12/laguna-del-tesoro.jpg' }} />
      <Paragraph>
        El imponente paraje es un imán para turistas de todo el mundo. Internet puso todo mucho más cerca y ahora con apenas un clic se puede conocer la leyenda del hermoso lugar en los Nevados del Aconquija.
      
      

      </Paragraph>
      <Button buttonColor="green" mode="contained" onPress={() => navigation.navigate("Home1")} >Inicio</Button>

    </Card>

  )
}

export default SettingsScreen2;