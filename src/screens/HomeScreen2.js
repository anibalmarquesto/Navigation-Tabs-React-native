import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const HomeScreen2 = () => { 
  const navigation = useNavigation();
  return (  

  <Card>
    <Card.Title title="Laguna del Tesoro"  left={LeftContent} />
    <Card.Content>
      <Title>Laguana del Tesoro</Title>
      <Paragraph>San Miguel de Tucumán</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.1b150abc0765c5dd08169a1cf6e5668f?rik=Ea14%2b6%2fiIlHPkA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-GyXmZcnocyk%2fUbKseFtTDUI%2fAAAAAAABzw8%2f9LbICH3qIMc%2fs1600%2fimagenes-para-fondo-de-pantalla-de-paisajes-playas-monta%C3%B1as-desiertos-lagos-y-rios%2b(7).jpg&ehk=RvepJGLwSljWm6IGHfePRRTqYhbklID4Qz0ftUmi7dU%3d&risl=&pid=ImgRaw&r=0' }} />
    <Card.Actions>

      <Button icon="camera" buttonColor="green" mode="contained" onPress={() =>navigation.navigate("Home1")} >Cancel</Button>
      <Button buttonColor="green" mode="contained" onPress={() =>navigation.navigate("Settings1")} >Ok</Button>
    </Card.Actions>
  </Card>
  );
  };

export default HomeScreen2;