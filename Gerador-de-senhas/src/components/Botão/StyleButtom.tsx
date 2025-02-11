import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    styleButtom:{
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 4,
        elevation:3,
        marginTop: 9,
        marginBottom:2,

    },
    styleText:{
        fontSize: 16,
        lineHeight: 21, // tamanho da linha
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        padding: 5,
       
    }

})

export default styles