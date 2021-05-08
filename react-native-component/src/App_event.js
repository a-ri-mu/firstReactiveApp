import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EventInput from './components/EventInput';
import EventButton from './components/EventButton';

const App = () => {
  return (
    <View style={styles.container}>
      <EventButton />   
      <EventInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize : 30,
    marginBottom : 10,
  },
});

export default App;
