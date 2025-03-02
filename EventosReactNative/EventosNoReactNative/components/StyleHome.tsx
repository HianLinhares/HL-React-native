import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
        color: 'white',
        fontSize:20,
        fontStyle: 'italic',
    },
    textinput:{
      color: 'white',
      fontSize: 18,
      borderRadius: 32,
      width:300,
      height: 50,
      textAlign: 'center',
      backgroundColor: 'green',
      marginTop: 20,
      borderColor: 'white',
      borderWidth: 5, //LARGURA DA BORDA
    },
    button:{
      borderColor: 'white',
      borderWidth: 5,
      marginTop: 200,
      borderRadius: 32,
      width:250,
      height: 50,
      textAlign: 'center',
      paddingLeft: '23%',
      color: 'white'

    }

  });
  