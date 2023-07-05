/*
npm install rn-swipe-button --save

*/
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import SwipeButton from 'rn-swipe-button';

export function SwipeBt(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
         MODELO DE SWIPE BUTTON
        </Text>
        <SwipeButton
          disabled={false}
          //disable the button by doing true (Optional)
          swipeSuccessThreshold={30}
          height={45}
          //height of the button (Optional)
          width={330}
          //width of the button (Optional)
          title="Deslize"
          //Text inside the button (Optional)
          //thumbIconImageSource={thumbIcon}
          //You can also set your own icon (Optional)
          onSwipeSuccess={() => {
            Alert.alert("ALERTA",'Enviado com sucesso!');
          }}
          //After the completion of swipe (Optional)
          railFillBackgroundColor="#e688a1" //(Optional)
          railFillBorderColor="#e688ff" //(Optional)
          thumbIconBackgroundColor="#ed9a73" //(Optional)
          thumbIconBorderColor="#ed9aff" //(Optional)
          railBackgroundColor="#bbeaa6" //(Optional)
          railBorderColor="#bbeaff" //(Optional)
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});