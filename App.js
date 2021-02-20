import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Produtos from './views/Produtos'
import Home from './views/Home'
import Login from './views/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Produtos" component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


