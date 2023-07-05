/*
npm install react-native-select-dropdown

*/
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

export function DropD(){
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    return(
        <View>
            <Text>dropDown</Text>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                defaultButtonText="SELECIONE" //Texto do botão
                rowStyle={{backgroundColor:'#f9f9f9'}}  //estilo da lista
                buttonStyle={{backgroundColor:'blue', alignSelf:'center'}} //estilo do botão
                rowTextStyle={{color:'#222'}} //texto das opções
                buttonTextStyle={{color:'#fff'}} //texto do botão
            />
        </View>
    )
}