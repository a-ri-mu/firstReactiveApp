import React from 'react';
import styled, {css} from 'styled-components/native';

//css 문법으로 작성가능
const ButtonContainer = styled.TouchableOpacity`
backgournd-color: #9b59b6;
border-radius : 15px;
padding: 15px 40px;
margin: 10px 0px;
justify-content: center;
`;

const Title = styled.Text`
font-size: 20px;
font-weight:600;
color:#fff;
`;

const Button = props => {
  return(
    <ButtonContainer>
      <Title>{props.title}</Title>
    </ButtonContainer>
  );
};

export default Button;


