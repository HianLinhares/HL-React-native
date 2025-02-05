import { Button, View, Text, Pressable } from "react-native";
import styles from './StyleButtom'

export function GeralButton(){
    return(
        <View style={styles.styleButtom}>
            <Button
            accessibilityLabel="clique aqui" 
            onPress={()=>{console.log('HIAN')}}
            title="CLIQUE AQUI MANO" >
            </Button>

            <Pressable
            onPress={()=>{console.log('foi pressionado')}}
            >
            <Text style = {styles.styleText}> Copy </Text>
            </Pressable>
        </View>

    );
}