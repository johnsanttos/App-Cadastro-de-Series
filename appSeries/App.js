import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Contato from "./src/pages/Contato";

const Stack = createNativeStackNavigator()

export default function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name = 'Home' 
        component= {Home}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name = 'Entrar' 
        component= {Login}
        />

        <Stack.Screen 
        name="Contato"
        component= {Contato}
        />
      </Stack.Navigator>
   

    </NavigationContainer>
  )
}