import React  from 'react'

import styled from 'styled-components/native'

export const TextStyled = styled.Text`
  color: ${({ theme }) => theme.color.color1};
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;

export const ContainerStyled = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.color0};
`;

export default {
  TextStyled,
  ContainerStyled
}