import React from 'react';
import {AiFillLock} from 'react-icons/ai';
import {SlLogout} from 'react-icons/sl';
import {
  Container,
  Header,
  HeaderText,
  Input,
  TextPass,
  ButtonSignIn,
  TextButtonSignIn,
  ButtonPass,
  Window,
  ButtonExit
} from './styles';

export default()=> {
  return (
    <Container>
      <Header>
        <HeaderText>O.M. DIGITAL</HeaderText>
      </Header>
        <Window>
                      <TextPass>Usuario</TextPass>
                      <Input/>
                      <TextPass>Senha</TextPass>
                      <Input placeholder='******' secureTextEntry={true} />
                      <ButtonPass><TextPass>Esqueceu sua senha?</TextPass></ButtonPass>
                      <ButtonSignIn>
                        <AiFillLock fill='#FFF' style={{position:'absolute'}}/>
                        <TextButtonSignIn>Entrar</TextButtonSignIn>
                      </ButtonSignIn>
                      <ButtonExit>
                      <SlLogout fill='#FFF' style={{position:'absolute'}}/>
                        <TextButtonSignIn>Exit</TextButtonSignIn>
                      </ButtonExit>
        </Window>

    </Container>
  );
};
