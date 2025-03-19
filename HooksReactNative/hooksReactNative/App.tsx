import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { useState, useEffect, useReducer } from 'react';


export default function App() {

  const [number, setnumber] = useState(0);
  const [numero, setnumero] = useState(10);


  // monitoramento de ações
 useEffect (()=>{
  if(numero===10 || numero===15){
    Alert.alert("Hian seu lindo")
  }
 },[numero])
  
 //Use reducer, criação de eventos 
const reducer = (state: {counter: number}, action: {type:string}) =>{
  switch(action.type){
    case 'somar':
      return{
        counter: state.counter + 1
      }
      default: 
      return state
  }
}

const [state, dispatch] = useReducer(reducer, {counter: 0})

const somar = ()=>{
  dispatch({type: 'somar'})
}

const subtrair = ()=>{
  dispatch({type: 'subtrair'})
}


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
