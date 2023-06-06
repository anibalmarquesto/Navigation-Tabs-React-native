import { View, Text, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


const SettingsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <Card>
      <Card.Content>
        <Title>Laguna del Tesoro</Title>
        <Paragraph>La Laguna del Tesoro es un majestuoso espejo de agua que se accede tras sortear intrincados caminos, abruptas subida, atravesando bosques de alisos, cedros y laureles. El Parque Provincial Cochuna comprende un ámbito de singular belleza, la Laguna del Tesoro.</Paragraph>
        <Button buttonColor="green" mode="contained" onPress={() => navigation.navigate("Settings2")} >Más info</Button>
      </Card.Content>
    </Card>

  );

};

export default SettingsScreen1;