import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native'


export function Home(){

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <LottieView
                autoPlay
                style={{
                width: 200,
                height: 200,
                backgroundColor: '#2f2f2f',
                alignSelf:'center',
                marginBottom:65,
                marginTop:35
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../118807-testing.json')}
            />
            <Text style={styles.title}>HORA DE TESTAR</Text>
            <Text style={styles.subTitle}>App voltado para testar coisas novas</Text>
            <ScrollView>
                <View style={styles.viewBts}>
                    <TouchableOpacity style={styles.botaoEsq} onPress={()=>navigation.navigate('Calendario')}>
                        <Text style={styles.textBt}>CALENDÁRIO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDir} onPress={()=>navigation.navigate('Slide')}>
                        <Text style={styles.textBt}>SLIDE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBts}>
                    <TouchableOpacity style={styles.botaoEsq} onPress={()=>navigation.navigate('FloatingLabel')}>
                        <Text style={styles.textBt}>FLOATING LABEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDir} onPress={()=>navigation.navigate('swipeButton')}>
                        <Text style={styles.textBt}>SWIPE BUTTON</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewBts}>
                    <TouchableOpacity style={styles.botaoEsq} onPress={()=>navigation.navigate('Carrosel')}>
                        <Text style={styles.textBt}>SNAP CARROSSEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botaoDir} onPress={()=>navigation.navigate('DropDown')}>
                        <Text style={styles.textBt}>DROPDOWN</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2f2f2f'
    },
    title:{
        fontSize:30,
        alignSelf:'center',
        color:'#ffcb46',
        marginBottom:30,
        fontWeight:'700'
    },
    subTitle:{
        fontSize:18,
        alignSelf:'center',
        color:'#f9f9f9',
        marginTop:-30,
        marginBottom:30,
        fontWeight:'300' 
    },
    botaoEsq:{
        width:120,
        height:120,
        backgroundColor:'#222',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        shadowColor:'#b9b9b9',
    },
    botaoDir:{
        width:120,
        height:120,
        backgroundColor:'#222',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        elevation:10,
        shadowColor:'#b9b9b9',
    },
    textBt:{
        color:'#f9f9f9',
        fontWeight:'300'
    },
    viewBts:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:20
    }
})