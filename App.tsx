import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react'
import symbolon from './assets/pictures/symbol-on.png';
import symboloff from './assets/pictures/symbol-off.png';


export default function App() {
  const [isActive, setIsActive] = useState(true)
  function handleySymbol(){
    setIsActive((oldValue:boolean)=>{
      return !oldValue;
    })

  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <Text style = {{color: 'white', fontSize: 20,justifyContent: 'center', alignItems: 'center'}}>Hello Hian</Text>
      <Text style = {{color: 'white', fontSize: 20 }}>Dev mobile react native</Text>
      <Text style = {styles.folhaDeEstilo}></Text>
      <TouchableOpacity onPress={handleySymbol}>
      <Image source={isActive ? symbolon : symboloff}></Image>
      </TouchableOpacity>
    </View>
        
  );
}

// criando uma folha de estilo (baseado em css)
const styles2 = StyleSheet.create({
  titleStyle:{
    fontSize:15,
    color: 'black'
  },
  teste:{
    fontSize:30,
    color: 'black'
  }
})


const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },
  containerOff:{
    flex:1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
  folhaDeEstilo:{
    color: 'white',
  }
});


/*
 FOLHA DE ESTILO BASEADA EM CSS
const styles2 = StyleSheet.create({
  titleStyle:{
    fontSize:15,
    color: 'red'
  }
})

LINHA DE ESTILO
  <Text style = {{color: 'white', backgroundColor: 'black', fontSize: 20 }}>Dev mobile react native</Text>

*/


