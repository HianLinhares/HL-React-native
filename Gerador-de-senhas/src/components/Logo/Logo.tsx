import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './StylesLogo';
import hianLinhares from '../../../assets/HianLinhares.jpeg'



export function Logo() {
  return (
    <>
    <Text style = {styles.title}> GERADOR DE SENHAS</Text>
    <Image style = {styles.img} source={hianLinhares}/>
    </>
  );
}