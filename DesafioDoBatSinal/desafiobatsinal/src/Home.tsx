import React, { useState } from 'react';
import { styles } from './StyleHome';
import { StatusBar } from 'expo-status-bar';
import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';


export function Home() {
  
  interface Props {
    trocarTela: () => void;
  }

  const [mostrarTelaA, setMostrarTelaA] = useState(true);

  
  return (
    <View style={{ flex: 1 }}>
    {mostrarTelaA ? (
      <TelaA trocarTela={() => setMostrarTelaA(false)} />
    ) : (
      <TelaB trocarTela={() => setMostrarTelaA(true)} />
    )}
  </View>
     
  );
}


  export function TelaA ({trocarTela }){
  return (
    <View style={styles.container}>
    <Image source={require('../assets/LogoBatman.png')}/>
    <TouchableOpacity style={styles.botao} onPress={trocarTela}>
    <Text style={styles.texto}>Active bat signal</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
    </View>
  );
}


export function TelaB({ trocarTela }){
  return (
    <View style = {styles.viewforms}>
    <Image source={require('../assets/LogoBatman.png')}></Image>
    <TextInput style={styles.textinput}
    placeholder='text'
    />
    <Text style={styles.labeldois}>Label</Text>
    <TextInput style={styles.textinput}
    placeholder='text'
    />
    <Text style={styles.label}>This is your hit</Text>
    <TextInput style={styles.textinputcaso}
    placeholder='your text here...'
    />
    <Text style={styles.labeldois}>Label</Text>
    <TextInput style={styles.textinputcaso}
    placeholder='your text here...'
    />
    <Text style={styles.label}>This is your hint</Text>
    <View style={styles.botaodois}>
    <TouchableOpacity style ={styles.botaoenviar} onPress={trocarTela}>
    <Text style = {styles.textodois}>Enviar</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}