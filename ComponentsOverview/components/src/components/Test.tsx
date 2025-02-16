import React, {useState} from 'react';
import { Alert ,Text, View, Image,TextInput, Button,
ScrollView,Switch } from 'react-native';
import { styles } from './Style';
import { StatusBar } from 'expo-status-bar'

//import reactNative2 from '../../assets/download.png';


export function Home() {
  const [usuario, setUsuario] = useState('')
  const [ligado, setLigado] = useState(true)

  function hanleSwitch(){
    setLigado(!ligado)
  }

  return (
    <View style={[styles.container, {backgroundColor: 'white'}]}>
      <StatusBar style='light'/>
      <Text selectable={false}
       style={styles.container}
       onPress={()=>{console.log("pressionado")}}
       onLongPress={()=>{console.log("pressionamento longo")}}
      >Hian Linhares</Text>
      <Image
      //Opção 1
      source={require('../../assets/download.png')}
      style = {{display: ligado? "flex" : "none"}}
      />
      {/* <Image
      //source={reactNative2}
      /> */}
      <TextInput style={styles.input}
      onChange={(text)=>setUsuario(text.nativeEvent.text)}
      keyboardType= "email-address"
      placeholder='Escreva aqui...'
      placeholderTextColor={'grey'}
      value= {usuario}
      />
      <Button
      title='Salvar'
      onPress={()=>{Alert.alert('Valor atual', usuario)}}
      />
      <Switch
      value = {ligado}
      onValueChange={hanleSwitch}
      >
      </Switch>
    </View>

   

  );
}

// select table = permite copiar e colar os textos
//onPress = {()=> {....}} ao pressionar ocorre uma ação
//onLongPress = {()=>{...}} ao pressionar por um longo tempo acontece uma ação
// usando o require na importação das imagens o caminho é
//Keyboardtype = tipos de teclado para atuação (numérico/email/senha)
// onChange={(event)=>{(console.log(event.nativeEvent.text))}} = capturando todo o campo de texto de um input