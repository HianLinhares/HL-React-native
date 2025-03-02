import React from 'react';
import { View, Text, TextInput, Button,TouchableOpacity } from 'react-native';
import {helloHian} from './../src/actions'

import { styles } from './StyleHome';

export function Home() {

  async function handlepress(id:number) {
    return console.log('presionado',id)
  }

  async function helloworld(){
    return console.log('hello world')
  }


  return (
    <View style={styles.container}>
    <Text onPress={()=>handlepress(1)} style={styles.texto}>ON PRESS COM PARAMETRO</Text>
    <Text style={styles.texto} onPress={helloHian}>ON PRESS INLINE</Text>
    <Text style={styles.texto} 
    onPress={helloworld}
    onPressIn={()=> console.log('PRESS IN ATIVADO')}
    onPressOut={()=> console.log ('PRESS OUT ATIVADO')}
    onLongPress={()=> console.log('muito tempo')}
    onTextLayout={()=> console.log('invocado quando o texto vai pro layout') }
    >ON PRESS E PRESS IN</Text>
    <Text style={styles.texto} onTextLayout={()=> console.log('olha ele aí')}>Hian Linhares</Text>
    <TextInput style={styles.textinput}
    placeholder= "Olá"
    onChange={()=> console.log('ON CHANGE EXECUTADO')}
    onChangeText={()=> console.log('ON CHANGE TEXT EXECUTADO')}
    onFocus={()=>console.log('usuário selecionou esse componente')}
    />
    <Button
    onPress={()=>console.log('clicou aqui')}
    title='botão'
    color={'red'}
    />
    <TouchableOpacity style={styles.button} onPress={() => console.log('Clicou aqui')}>
    <Text style={styles.texto}>Botão</Text>
    </TouchableOpacity>
  </View>
  );
}

//eventos são ações que acontecem com o componente quando algo acontece (precionar o componentes, selecionar)

// inline - algo curto, direto no componente
// aparte - uma função antes do return sem nenhum parâmetro que apenas utiliza o nome da função para chamar
// aparte com parametro - aonde é necessáruo utilizar uma arrow function e utilizar o nome da função e um parametro
// exportação de função - é criado em um outro arquivo e exportado para dentro do arquivo parecido com um componente


// (TEXT) onPressIn - PRIMEIRO A SER ATIVADO
// (TEXT) onPress - SEGUNDO A SER ATIVADO
//(TEXT)  onPressOut - TERCEIRO A SER ATIVADO
// (TEXT) onTextLayout - APARECE QUANDO O TEXTO É RENDERIZADO NA TELA
// (INPUT TEXT)onChage - SIGNIFICA QUE HOUVE MUDANÇA
//(INPUT TEXT) onChangeText - SIGNIFICA QUE HOUVE MUDANÇA E FOI NO TEXTO
//(INPUT TEXT) onFocus - SIGNIFICA QUE HOUVE UMA AÇÃO SOBRE O COMPONENTE