import React from 'react';      //리액트를 불러옴
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const MyButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>My Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding : 16, 
    backgroundColor: '#3498db',
    borderRadius : 8,
  },
  text: {
    fontSize : 30,
    marginBottom : 10,
  },
});

export default MyButton;