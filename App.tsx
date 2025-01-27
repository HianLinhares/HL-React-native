import { StyleSheet, Text, View,Image} from 'react-native';
import symbolon from './assets/pictures/symbol-on.png';
import symboloff from './assets/pictures/symbol-off.png';


export default function App() {
  const isActive = false;

  return (
    <View style={styles.container}>
      <Text style = {{color: 'white', backgroundColor: 'black', fontSize: 20 }}>Hello Hian</Text>
      <Text style = {{color: 'white', backgroundColor: 'black', fontSize: 20 }}>Dev mobile react native</Text>
      <Text style = {styles2.titleStyle}>teste de folha de estilo</Text> 
      <Text style = {styles2.teste}>teste de folha de estilo</Text>
      <Image source={isActive ? symbolon : symboloff}></Image>
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
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
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


