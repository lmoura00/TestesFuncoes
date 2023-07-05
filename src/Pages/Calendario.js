/*
https://www.npmjs.com/package/react-native-calendars

 #npm i react-native-calendars

Para instalar
Não precisa de mais nada.
*/
import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames:[
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio', 
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort:[
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  dayNames:[
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ],
  dayNamesShort:[
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Quin',
    'Sex',
    'Sab'
  ]
}

LocaleConfig.defaultLocale = 'pt-br'

export function Calendario(){
  const [selected, setSelected] = useState('');
  const dataAtual = Date.UTC()
  useEffect(()=>{
    console.log(dataAtual)
  },[])
  return(
    <View style={{flex:1, marginTop:30}}>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
        }}
        style={{
            borderWidth:1,
            borderColor:'#ffbc46',
            marginHorizontal:5
        }}
        theme={{
          backgroundColor: '#fff',
          calendarBackground: '#2f2f2f', //cor de fundo do calendário
          textSectionTitleColor: '#fff', //cor do  titulo do mes
          monthTextColor:'#fff',
          selectedDayBackgroundColor: '#ffbc46', //cor de fundo do dia selecionado
          selectedDayTextColor: '#ffffff', //cor do dia selecionado
          todayTextColor: '#fff', //cor do dia atual
          dayTextColor: '#ffbc46', //cor dos números
          textDisabledColor: '#b9b9b9' 
        }}
      />
      {
        selected &&  
        <Text style={{fontSize:20, textAlign:'center', marginTop:25}}>A DATA SELECIONADA É: {selected}</Text>
      }

    </View>
    );
}
  