import React from 'react';      //리액트를 불러옴
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';


const MyButton = props => {
  console.log(props); 
  //props(properties) 부모 컴포넌트에서 전달된 속성값 or 상속받은 속성값. 자식이 props를 바꿀 수 없음
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => props.onPress()}>
      <Text style={styles.text}>{props.children || props.title}</Text>
    </TouchableOpacity>
  );
};

//props 값이 없을때 디폴트로 나오는 값
MyButton.defaultProps = {
  title: 'Button',
};

//props 타입 지정
MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding : 16, 
    backgroundColor: '#3498db',
    borderRadius : 8,
  },
  text: {
    color: 'white',
    fontSize : 30,
    marginBottom : 10,
  },
});

export default MyButton;