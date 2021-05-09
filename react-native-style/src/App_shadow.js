import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShadowBox from './component/ShadowBox';

const App = () => {
  return (
    <View style={styles.container}>
      <ShadowBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
