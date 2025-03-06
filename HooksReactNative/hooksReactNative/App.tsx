import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [number, setnumber] = useState(0)

  return (
    <View style={styles.container}>

    <TouchableOpacity onPress={()=> setnumber(number-1)}>
      <Text style = {styles.texto}>{number}</Text>
    </TouchableOpacity>
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
  }
});
