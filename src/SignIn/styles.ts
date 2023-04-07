import React from 'react';
import styled from "styled-components";



export const Container = styled.View`
flex:1;
height:300px;
justify-content:center;
background-color:#FFF;
`;
export const Header = styled.View`
align-items:center;
margin-top:100px;
`;
export const HeaderText = styled.Text`
font-size:18px;
color:#000D33;
font-weight:bold;
`;
export const Input = styled.TextInput`
border:1px solid #ccc;
  padding: 10px;
  width: 80%; 
  margin-bottom:15px;
`;
export const ButtonPass = styled.TouchableOpacity`
margin:10px;
`;
export const TextPass = styled.Text`
color:#000D33;
`;
export const ButtonSignIn = styled.TouchableOpacity`
background-color:#016006;
padding:10px;
text-align:center;
width:120px;
align-self:center;
border-radius:5px;
margin-top:10px;
`;
export const TextButtonSignIn = styled.Text`
  color:#FFF;
`;
export const Window = styled.View`
padding:30px;
margin:30px;
`
export const ButtonExit = styled.TouchableOpacity`
background-color:#CCC;
padding:10px;
text-align:center;
width:100px;
align-self:center;
border-radius:5px;
margin-top:10px;
`;