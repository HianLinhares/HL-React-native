import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './StylesHome';
import {Logo}  from '../Logo/Logo';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.textos}></Text>
      <StatusBar style="inverted" />
      <Logo/>
    </View>
  );
}

