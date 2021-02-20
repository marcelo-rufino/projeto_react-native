import React from 'react';
import {TextInput, View, Image, StyleSheet, Text, FlatList} from 'react-native';


export default function Produtos(props)
  {
      return(
          <View style={styles.container}>
            <Image source={require('../assets/produtos.png')} style={styles.logo}/>
            <View style={styles.container}>
              <FlatList
                data={[
                    {key: 'Jogos'},
                    {key: 'Consoles'},
                    {key: 'Joysticks'},
                    {key: 'Monitores'},
                    {key: 'Mouses'},
                    {key: 'Headsets'},
                    {key: 'Teclados'},
                    {key: 'Mousepads'},
                    {key: 'Cadeiras'},
                    ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
              />
            </View>

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
        width: 200,
        height: 50,
        borderRadius: 30,
      },
      btn:{
        flexDirection:'row',
      }
    });
    
