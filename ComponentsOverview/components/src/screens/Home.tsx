import React from 'react';
import { View, Text, Alert} from 'react-native';
import { styles } from './Style';
import { StatusBar } from 'expo-status-bar';

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
      onTouchStart={(event)=>{
        Alert.alert('Toque', 'Clique finalizado')
      }}
      onTouchEnd={(evento)=>{
        Alert.alert('Toque', 'Toque finalizado')
      }}
      >
        <Text>Hian</Text>
      </View>
    </View>
  );
}