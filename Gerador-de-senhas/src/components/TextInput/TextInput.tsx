import React from 'react';
import {TextInput} from 'react-native';
import { styles } from './StyleTextInput';
interface CustomTextInputProps{
  pass:string
}

export function CustomTextInput(props:CustomTextInputProps) {
  return (
    <TextInput style ={styles.styleTextInput}
     placeholder ='Senha'
     value={props.pass}
     >
     </TextInput>
  );
}