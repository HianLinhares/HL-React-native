import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './StyleHome';

export function Home() {
  return (
    <View style={styles.container}>
        <Redbox></Redbox>
        
    </View>
  );
}

export default function Redbox(){
  return(
    <>
    <View style = {{width:90, height:100, backgroundColor:'red',
      flexDirection: 'column', justifyContent:'flex-start', alignItems:'flex-start', flex:1, left:0, position:'absolute'
     }}></View>
    </>
  );
}