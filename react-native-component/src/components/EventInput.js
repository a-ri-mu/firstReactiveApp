import React, {useState} from 'react';
import { View, TextInput , Text, StyleSheet } from 'react-native';

const EventInput = () => {
  const [text, setText] = useState('');
  const _onChange = event => setText(event.nativeEvent.text); // eventCount, target, text ...
  const _onChangeText = text => setText(text);

  return (
    <View>
      <Text style={styles.text}>text:{text}</Text>
      <TextInput 
      style={styles.textInput}
      placeholder="Enter a text..."
      //onChange={_onChange}
      onChangeText={_onChangeText} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding : 10, 
    fontSize : 20,
  },
  text: {
    margin: 10,
    fontSize : 30,
  },
});

export default EventInput;