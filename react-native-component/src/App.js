import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventBtn_Pressable from './components/EventBtn_Pressable';

const App = () => {
  return (
    <View style={styles.container}>
      <EventBtn_Pressable/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize : 30,
    marginBottom : 10,
  },
});

export default App;
