import React from 'react'
import styled from 'styled-components';
import {mobile } from '../responsive';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})};
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
  padding: 5px;
  margin: 10px 10px 0px 0px;
`;


const Button = styled.button`
  padding: 10px;
  background-color: white;
  margin: 10px 0px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    border: 2px solid teal;
    color: black;
    background-color: white;
    transform: scale(1.1);
  }
`;

const Link = styled.a`
  margin: 0px 0px 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="username"/>
          <Input placeholder="password"/>
          
          <Button>LOGIN</Button>
          <Link>Forgot password ?</Link>
          <Link>Forgot username ?</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login