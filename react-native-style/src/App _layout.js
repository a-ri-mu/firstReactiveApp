import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Contents, Footer } from './component/Layout';


const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <Contents />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
