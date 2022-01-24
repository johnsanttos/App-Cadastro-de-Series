import React from 'react';
import { View, Text , TouchableOpacity,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Home () {
  const navigation =useNavigation ()

  function navegaEntrar(){
    navigation.navigate('Entrar',{ nome: 'John', email: 'john@dev.com'})
  }
   
 
  return (
    
    <View
    style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >

<Text> Tela Home</Text>
      <Button
      title='Sobre'
      onPress={navegaEntrar}
      />
<Button 
title ='Contato'
onPress={() =>navigation.navigate('Contato')} //navigator em linha
/>
  
     
    </View>
   );
 }


