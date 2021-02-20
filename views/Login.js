import React from 'react';
import { StyleSheet, View, TextInput, Button, Image,} from 'react-native';


export default function Login(props)
{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/login.jpg')} style={styles.logo}/>
            <TextInput style={styles.input} placeholder="Digite seu usuário" onChangeText={text=>setNome(text)}/>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={text=>setSenha(text)} secureTextEntry={true}/>
            <Button title="Entrar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: 'white',
      paddingTop: 10,
      alignItems: 'center',
      justifyContent: 'top',
    },
    logo:{
      width: 100,
      height: 100,
      borderRadius: 30,
    },
    
    btn:{
      flexDirection:'row',
    }
  });
  