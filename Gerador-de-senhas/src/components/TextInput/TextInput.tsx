import React from 'react';
import {TextInput} from 'react-native';

import { styles } from './StyleTextInput';

export function CustomTextInput() {
  return (
    <TextInput style ={styles.styleTextInput} placeholder ='SENHA'></TextInput>
  );
}