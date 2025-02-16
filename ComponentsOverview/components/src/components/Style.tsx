import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    color: 'black',
    backgroundColor: 'white',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: 100
  },
  input: {
 
    margin: 12,
    borderWidth:1,
    padding:10,
    borderColor:'black',
    borderRadius: 12,
    borderEndWidth:120,
    color: 'black',
    width: 250, // Define a largura fixa
    height: 40,  // Define a altura fixa
  },
});