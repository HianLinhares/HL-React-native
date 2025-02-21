import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        // Flex 1 representa 100% da tela disponível, não utilizar representaria utilizar apenas o espaço dos componentes na tela

      borderWidth: 5,
      borderColor: 'red',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
