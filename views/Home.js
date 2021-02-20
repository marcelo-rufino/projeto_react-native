import React from 'react';

import {StyleSheet, View, Button, Image } from 'react-native';

export default function Home (props) {
    return (
    <View style={styles.container}>

      <Image source={require('../assets/logo.jpg')}
        style={styles.logo}
      />      
     
      <View style={styles.btn}>

        <Button title="Login" onPress={()=> props.navigation.navigate('Login')}/>
        <Button title="Produtos" onPress={()=> props.navigation.navigate('Produtos')}/>
        
      </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 10,
      alignItems: 'center',
      justifyContent: 'top',
    },

    logo:{
      width: 500,
      height: 400,
      borderRadius: 30,
    },

    btn:{
      flexDirection:'row',
    }
  });
  