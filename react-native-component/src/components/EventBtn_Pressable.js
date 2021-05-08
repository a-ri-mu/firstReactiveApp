import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const EventBtn_Pressable = () => {
const _onPressIn = () => console.log('Press In !!!\n');     //터치가 시작될때 호출
const _onPressOut = () => console.log('Press Out !!!\n');   //터치 해제시 호출
const _onPress = () => console.log('Press !!!\n');          //터치 해제 onPressOut 이후 호출. onLongPress 호출되면 호출 안 됨
const _onLongPress = () => console.log('Long Press !!!\n'); //터치 일정 시간 지속시 호출. onPress 호출되면 호출 안 됨

  return (
    <Pressable 
    style={styles.container}
    onPress={_onPress}
    onPressIn={_onPressIn}
    onPressOut={_onPressOut}
    onLongPress={_onLongPress}
    delayLongPress={3000}
    pressRetentionOffset={{bottom:50, left:50, right:50, top:50}}
    hitSlop={50}
    >
      <Text style={styles.text}>Pressable</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding : 10, 
    backgroundColor: '#1abc9c',
  },
  text: {
    color : 'white',
    fontSize : 30,
    padding : 10,
  },
});

export default EventBtn_Pressable;