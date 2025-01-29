import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styles from './Styles';



export default function Home() {
  return (
    <View style = {styles.container}>
     <StatusBar style="auto"/>
     <Text>Home works</Text>
    </View>
  );
}


