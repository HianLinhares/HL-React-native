import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    color: 'white',
    backgroundColor: 'black',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
    fontSize: 20,
  },
  input: {
 
    margin: 12,
    borderWidth:1,
    padding:10,
    borderColor:'white',
    borderRadius: 12,
    borderEndWidth:120,
    color: 'white',
    width: 250, // Define a largura fixa
    height: 40,  // Define a altura fixa
  },
});