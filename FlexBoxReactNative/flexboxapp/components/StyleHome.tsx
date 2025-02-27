import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        // Flex 1 representa 100% da tela disponível, não utilizar representaria utilizar apenas o espaço dos componentes na tela

      borderWidth: 3,
      borderColor: 'white',
      backgroundColor: 'black',
      flexDirection: 'row', // direção da renderização dos componentes LINHA (ROW) OU COLUNA (COLUNA)
      alignItems: 'center',
      justifyContent: 'center', // varia de acordo com o flex direction (eixo x - row ou eixo y colunm)
      // flexWrap: 'wrap', //determina a quebra ou não de linhas
      alignContent: 'center' // propriedade utilizada junto ao flex wrap e sinaliza aonde o eixo secundario deve jogar os itens quebrados 
    },
  });


  // FLEX DIRECTION = ROW
  // JUSTIFY CONTENT - X / ALIGN ITEMS - Y

  // FLEX DIRECTION = COLUMN
  //ALIGN ITEMS - X / JUSTIFY CONTENT - Y

  // ALIGN SELF: APLICADO NOS ITENS FILHOS - SEMPRE NO EIXO SECUNDARIO

  // FLEX BASIS: ALTERAÇÃO NA PROPORÇAO (ALTURA/LARGRA) DIRETO NO ITEM FILHO

  // FLEX GROW: APLICADO NOS ITENS FILHOS E EXPANDE OS ITENS FILHOS AO MÁXIMO 

  //FLEX SHRINK: APLICADO AOS ITENS FILHOS A REDUÇÃO DOS COMPONENTES