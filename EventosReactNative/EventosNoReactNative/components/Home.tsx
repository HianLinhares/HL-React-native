import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './StyleHome';

export function Home() {
  return (
    <View style={styles.container}>
    <Text style={styles.texto}>Eventos com React Native</Text>
    <StatusBar style="auto" />
  </View>
  );
}