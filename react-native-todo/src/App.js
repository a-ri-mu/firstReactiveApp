import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import {theme} from './theme'
import {StatusBar} from 'react-native';
import Input from './components/Input';

const Container = styled.View`
flex:1;
background-color: ${({theme}) => theme.backgroud};
align-items:center;
justify-content:flex-start;
`;

const Title = styled.Text`
font-size:40px;
font-weight:600;
color:${({theme}) => theme.main};
align-self:flex-start;
margin: 0px 20px;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
        barStyle="light-content"
        backgroundColor={theme.backgroud}
        />
        <Title>TODO List</Title>
        <Input/>
      </Container>
    </ThemeProvider>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/