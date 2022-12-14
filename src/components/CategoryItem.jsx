import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
` 
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Button = styled.button`
  background-color: white;
  border: none;
  padding: 10px;
  color: grey;
  font-weight: 600;
  cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem