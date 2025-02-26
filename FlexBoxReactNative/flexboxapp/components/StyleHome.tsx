import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        // Flex 1 representa 100% da tela disponível, não utilizar representaria utilizar apenas o espaço dos componentes na tela

      borderWidth: 5,
      borderColor: 'white',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center', // varia de acordo com o flex direction (eixo x - row ou eixo y colunm)
      flexDirection: 'column', // direção da renderização dos componentes LINHA (ROW) OU COLUNA (COLUNA)
    },
  });


  // FLEX DIRECTION = ROW
  // JUSTIFY CONTENT - X / ALIGN ITEMS - Y

  // FLEX DIRECTION = COLUMN
  // JUSTIFY CONTENT - Y / ALIGN ITEMS - X

  // ALIGN SELF: APLICADO NOS ITENS FILHOS - SEMPRE NO EIXO SECUNDARIO