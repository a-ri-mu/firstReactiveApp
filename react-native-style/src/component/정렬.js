import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Justify1 = () => {
  return(
    <View style={[styles.container, styles.justify]}>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'flex-start'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'space-between'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export const Justify2 = () => {
  return(
    <View style={[styles.container, styles.justify]}>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'flex-end'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'space-around'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export const Justify3 = () => {
  return(
    <View style={[styles.container, styles.justify]}>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'center'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.justify, {borderWidth:1, justifyContent:'space-evenly'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export const AlignIt1 = () => {
  return(
    <View style={[styles.container, styles.align]}>
      <View style={[styles.container, styles.align, {borderWidth:1, alignItems:'flex-start'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.align, {borderWidth:1, alignItems:'flex-end'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export const AlignIt2 = () => {
  return(
    <View style={[styles.container, styles.align]}>
      <View style={[styles.container, styles.align, {borderWidth:1, alignItems:'center'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.align, {borderWidth:1, alignItems:'stretch'}]}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export const AlignIt3 = () => {
  return(
    <View style={[styles.container, styles.align]}>
      <View style={[styles.container, styles.align, {borderWidth:1, alignItems:'baseline'}]}>
        <Text style={[styles.text, {padding:8}]}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.container, styles.align, {justifyContent:'center',borderWidth:1, alignItems:'baseline'}]}>
        <Text style={[styles.text, {padding:8}]}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexDirection:'row',
  },
  justify:{ //justifyContent
    flex : 1,
    backgroundColor:'#f1c40f',
  },
  align:{ //alignItems
    flex : 1,
    backgroundColor:'#1abc9c',
  },
  text:{
    fontSize: 26,
    width:'15%',
    borderWidth:3,
  },
});


//flexDirection : column, column-reverse, row, row-reverse
//flexDirection 따라서 justtifyContent(따라가고), alignItems(수직방향) 방향 결정됨
