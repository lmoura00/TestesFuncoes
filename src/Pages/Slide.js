/*
 npx expo install react-native-reanimated@~2.14.4          INSTALAR ESSA VERSÃO DO REANIMATED
 plugins: ['react-native-reanimated/plugin'],               INSTALAR O PLUGIN NO BABEL.CONFIG.JS
 npx expo start --clear.                                    INICIALIZAR O EXPO LIMPO

NÃO FUNCIONAL AINDA
*/
import React from "react";
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native'
import SlideButton from 'rn-slide-button';

export function Slide(){
    return(
        <View>
            <Text>Slide</Text>
            <SlideButton title="Slide To Unlock" complelteThreshold={70} animation={true}/>
            <Text style={{fontSize:20, textAlign:'center'}}>NÃO FUNCIONANDO AINDA</Text>
        </View>
    )
}