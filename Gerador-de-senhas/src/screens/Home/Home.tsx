import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Logo} from '../../components/Logo/Logo';
import styles from './StylesHome';
import {CustomTextInput} from '../../components/TextInput/TextInput';
import {GeralButton} from '../../components/Botão/CustomButtom';


export function App() {
  return (
    <View style={styles.logoContainer}>
      <Text style = {styles.textos}></Text>
      <StatusBar style="dark"/>
      <Logo/>

      <View style ={styles.inputContainer}>
     
      </View>
      
      
        <GeralButton/>
      

    </View>
  );
}

