import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Justify1, Justify2, Justify3, AlignIt1, AlignIt2, AlignIt3 } from './component/정렬';


const App = () => {
  return (
    <View style={styles.appContainer}>
      <Justify1/>
      <Justify2/>
      <Justify3/>
      <AlignIt1/>
      <AlignIt2/>
      <AlignIt3/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
