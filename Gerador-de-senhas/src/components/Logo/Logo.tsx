import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './StylesLogo';
import hianLinhares from '../../../assets/HianLinhares.jpeg'



export function Logo() {
  return (
    <>
    <Text style = {styles.title}> Gerador de senhas - Hian Linhares</Text>
    <Image style = {styles.img} source={hianLinhares}/>
    </>
  );
}