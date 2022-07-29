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
  width: 40%;
  padding: 20px;
  background-color: white;
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
  ${mobile({width: "75%"})};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
  padding: 5px;
  margin: 10px 10px 10px 0px;
`;

const Agreement = styled.p`
font-size: 12px;
margin: 10px 0px 20px 2px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: white;
  
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input placeholder="first name"/>
          <Input placeholder="last name"/>
          <Input placeholder="username"/>
          <Input placeholder="email"/>
          <Input placeholder="password"/>
          <Input placeholder="confirm password"/>
          <Agreement>
            By creating this account you accept the terms and conditions of usage.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register