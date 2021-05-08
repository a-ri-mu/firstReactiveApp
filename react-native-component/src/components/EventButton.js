import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const EventButton = () => {
const _onPressIn = () => console.log('Press In !!!\n');     //터치가 시작될때 호출
const _onPressOut = () => console.log('Press Out !!!\n');   //터치 해제시 호출
const _onPress = () => console.log('Press !!!\n');          //터치 해제 onPressOut 이후 호출. onLongPress 호출되면 호출 안 됨
const _onLongPress = () => console.log('Long Press !!!\n'); //터치 일정 시간 지속시 호출. onPress 호출되면 호출 안 됨


  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={_onPress}
    onPressIn={_onPressIn}
    onPressOut={_onPressOut}
    onLongPress={_onLongPress}
    delayLongPress={3000}
    >
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding : 16, 
    backgroundColor: '#f1c40f',
    borderRadius : 8,
  },
  text: {
    color : 'white',
    fontSize : 24,
  },
});

export default EventButton;