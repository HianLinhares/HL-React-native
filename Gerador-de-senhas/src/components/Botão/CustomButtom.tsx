import { Button, View, Text, Pressable } from "react-native";
import styles from './StyleButtom'
import { CustomTextInput } from "../TextInput/TextInput";
import { useState } from "react";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';

export function GeralButton(){
    const [pass, setPass] = useState('')

    function handleGenerateButtom(){
        let generateToken = generatePass()
        setPass(generatePass)
    }

    function handleCopyButtom(){
        Clipboard.setStringAsync(pass)
    }

    return(
        <View>
               <CustomTextInput pass={pass}/>

            <Pressable
            onPress={handleGenerateButtom}
            style={styles.styleButtom}
            >
            <Text style = {styles.styleText}> Gerar senha </Text>
            </Pressable>


            <Pressable
            onPress={handleCopyButtom}
            style={styles.styleButtom}
            >
            <Text style = {styles.styleText}> Copiar </Text>
            </Pressable>

               {/* <Button
            accessibilityLabel="clique aqui" 
            onPress={()=>{console.log('HIAN')}}
            title="CLIQUE AQUI" >
            </Button> */}


        </View>

    );
}