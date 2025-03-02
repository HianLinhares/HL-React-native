import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao:{
        borderRadius:8,
        borderColor: 'black',
        borderWidth: 8,
        backgroundColor: 'black',
        width: 300,
        height: 50,
        marginTop: 250,
    },
    texto:{
        color: 'white',
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewforms:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'flex-start', 
    },
    textinput:{
        height: 60,
        width: 320,
        borderColor: 'black',
        borderWidth: 5,
        margin: 20,
        borderRadius:8
    },
     textinputcaso:{
        height: 110,
        width: 320,
        borderColor: 'black',
        borderWidth: 5,
        margin: 20,
        borderRadius:8
    },
    botaodois:{
        flex: 2,
        width: 400,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoenviar:{
        borderColor:'black',
        borderWidth: 7,
        width:300,
        height: 70,
        backgroundColor: 'black',
        borderRadius: 16
    }, 
    textodois:{
        color: 'white',
        textAlign: "center",
        fontSize: 24,
        paddingTop: 7,
        fontWeight:'700',
    },
    label:{
        marginLeft: 30,
        fontSize:12,
        fontWeight:'400',
        marginTop: -15
    },
    labeldois:{
        marginBottom: -10,
        marginTop: 10,
        marginLeft: 30,
        fontSize:17,
        fontWeight:'bold',
    }

  });