import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './MyButton';


const Counter = () => {
const [count, setCount] = useState(0);
const [double, setDouble] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>count  : {count}</Text>
      <Text style={styles.text}>double : {double}</Text>
      <MyButton title='+' onPress={() => {
        setCount(count+1); setDouble(double+2);
      }} />
      <MyButton title='-' onPress={() => {
        setCount(count-1); setDouble(double-2);
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
  },
  text: {
    fontSize : 30,
    margin : 10,
  },
});

export default Counter;