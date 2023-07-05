/*
 npx expo install react-native-reanimated@~2.14.4          INSTALAR ESSA VERSÃO DO REANIMATED
 plugins: ['react-native-reanimated/plugin'],               INSTALAR O PLUGIN NO BABEL.CONFIG.JS
 npx expo start --clear.                                    INICIALIZAR O EXPO LIMPO


*/
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Entypo } from '@expo/vector-icons';

export function FloatingLabel() {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');



  return (
    <View style={{flex: 1, backgroundColor: '#fff' }}>
        <View style={{marginBottom:10, paddingHorizontal:10, marginTop:10}}>
          <FloatingLabelInput
              label={'Nome'}
              value={nome}
              onChangeText={value => setNome(value)}
              style={{width:50, height:60, elevation:10}}
          />
        </View>
        <View style={{marginBottom:10, paddingHorizontal:10}}>
          <FloatingLabelInput
              label={'Sobrenome'}
              value={sobreNome}
              onChangeText={value => setSobreNome(value)}
              style={{width:50, height:60}}
          />
        </View>
        <View style={{marginBottom:10, paddingHorizontal:10}}>
          <FloatingLabelInput
              label={'Senha'}
              isPassword
              togglePassword={show}
              value={cont}
              onChangeText={value => setCont(value)}
              customShowPasswordComponent={<Entypo name="eye" size={24} color="black" />}
              customHidePasswordComponent={<Entypo name="eye-with-line" size={24} color="black" />}
              style={{width:50, height:60}}
          />
        </View>
        <View style={{marginBottom:10, paddingHorizontal:10}}>
            <FloatingLabelInput
                label="Telefone"
                value={phone}
                staticLabel
                hintTextColor={'#aaa'}
                mask="99 (99) 99999-9999"
                hint="55 (22) 98765-4321"
                keyboardAppearance='default'
                keyboardType='decimal-pad'
                containerStyles={{
                borderWidth: 2,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                borderColor: 'blue',
                borderRadius: 8,
     
                }}
                customLabelStyles={{
                colorFocused: 'red',
                fontSizeFocused: 12,
                }}
                labelStyles={{
                backgroundColor: '#fff',
                paddingHorizontal: 5,
                }}
                inputStyles={{
                color: 'blue',
                paddingHorizontal: 10,
                height:60
                }}
                onChangeText={value => {
                setPhone(value);
                }}
                style={{width:100, height:100}}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});