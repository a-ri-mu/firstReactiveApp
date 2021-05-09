import React from 'react';
import styled, {css} from 'styled-components/native';

const Container = styled.View`
flex:1;
backgournd-color: #ffffff;
align-items: center;
justify-content : center;
`;

const App = () => {
  return (
    <Container>
      <Button title="Hanbit" />
      <Button title="React Native" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
