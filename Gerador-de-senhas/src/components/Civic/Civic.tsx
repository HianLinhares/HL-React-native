import civic from '../../../assets/civic.jpg';
import React from 'react';
import { Image } from 'react-native';
import style from './StyleCivic';

export function Civic (){
    return(
        <>
        <Image style={style.styleCivic}  source={civic}></Image>
        </>
    );

}