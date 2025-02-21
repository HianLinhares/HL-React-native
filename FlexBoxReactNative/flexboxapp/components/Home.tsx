import React from 'react';
import { View, Text, Image, } from 'react-native';
import { styles } from './StyleHome';
import { StatusBar } from 'expo-status-bar';


export function Home() {
  return (
<View style={styles.container}>
      {/* <Text style= {styles.texto}>Hian Linhars - React Native</Text>
      <Image
      style={styles.image}
      source={require('../assets/aerofolio_tunning_civic1-a788196ad2a0b1100815132700334392-1024-1024.jpg')}
      />
      <StatusBar style="dark" /> */}
    <CaixaRed></CaixaRed>
    <CaixaBlue></CaixaBlue>
    <CaixaRed></CaixaRed>
    <CaixaBlue></CaixaBlue>
    </View>
  );
}


export function CaixaRed(){
    return(
    <View style={{height:100, width:200, backgroundColor: 'red', flex:1}}>
    </View>
    );
}


export function CaixaBlue(){
    return(
    <View style={{height:100, width:300, backgroundColor: 'blue', flex:1}}>
    </View>
    );
}