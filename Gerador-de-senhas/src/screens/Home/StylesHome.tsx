import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textos:{
        color:'white',
        fontSize: 16,
        marginBottom: 10,
    },
    logoContainer:{
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'center',
      justifyContent: 'center',
      borderColor: 'green',
      borderWidth: 2,
      paddingTop: 50,
      backgroundColor: 'black',
    },
    inputContainer:{
      borderColor: 'red',
      flexDirection: 'column'
      
    }

  });


  export default styles;