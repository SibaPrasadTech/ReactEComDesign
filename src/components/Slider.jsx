import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from "styled-components";
import { sliderItems } from '../data';
import { mobile } from '../responsive';
const Container = styled.div`
  margin-top: 5px;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none"})};
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX( ${props => props.slideIndex * -100 }vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bgc};
  margin-left: 2px;
`

const ImgContainer = styled.div`
height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 50px;
`

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f1ecec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
`

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  const handleArrowClick = (direction) => {
    if(direction === "left"){
      setSlideIndex((prevSlideIndex) => {
        return prevSlideIndex > 0 ? prevSlideIndex - 1 : prevSlideIndex + 2
      })
    }
    else{
      setSlideIndex((prevSlideIndex) => {
        return prevSlideIndex < 2 ? prevSlideIndex + 1 : prevSlideIndex - 2
      })
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => (handleArrowClick("left"))}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((sliderItem)=> {
          return <Slide bgc={sliderItem.bg} key={sliderItem.id}>
          <ImgContainer>
            <Image src={sliderItem.img}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{sliderItem.title}</Title>
            <Description>{sliderItem.desc}</Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        })}
        
      </Wrapper>
        
      <Arrow direction="right" onClick={() => (handleArrowClick("right"))}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider