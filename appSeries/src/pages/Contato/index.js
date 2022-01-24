import React from 'react';
import { View,Text,Button} from 'react-native';
import { useNavigation, StackActions, NavigationContainer } from '@react-navigation/native';

export default function Contato() {
    const navigation =useNavigation()

    function handleHome() {
       navigation.dispatch(StackActions.popToTop) // voltar para o inicio da tela
    }
 return (
   <View>
       <Text> Pagina de Contatos</Text>
<Button title= 'Voltar Home' onPress={handleHome} />
   </View>
  );
}