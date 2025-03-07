import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';


export default function App() {

  const [number, setnumber] = useState(0);
  const [numero, setnumero] = useState(10);

  useEffect(()=>{
    if(numero===10)
    Alert.alert("Hian seu lindo")
  },[numero])
  

  const incremento = ()=> {
    if(numero>-1){
      setnumero((numero=>numero+1))
    }
  }

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={()=> setnumber(number-1)}>
      <Text style = {styles.texto}>{numero}</Text>
    </TouchableOpacity>

    <Button
      title='SOMAR'
      onPress={incremento}
    ></Button>

    <Button
      title='SUBTRAIR'
      onPress={()=> setnumero(numero-1)}
    ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:40,
    borderColor: 'black',
    borderWidth: 10,
    padding:40,
    borderRadius:16,
  },
  botoes:{
    padding:10,
  }
});
