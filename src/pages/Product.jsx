import Announcement from '../components/Announcements';
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '5px', flexDirection: 'column' })};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '5px' })};
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 20px 0px;
  
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 25px;
  ${mobile({ fontSize: '25px' })};
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
  ${mobile({ width: '100%' })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${mobile({ fontSize: '18px' })};
`;
const FilterColor = styled.div`
 margin-left: 5px; 
 width: 20px;
 height: 20px;
 border-radius: 50%;
 background-color: ${(props) => props.color};
 cursor: pointer;
`;
const FilterSize = styled.select`
  margin: 0px 10px;
  padding: 5px 5px;
  cursor: pointer;
`;
const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ width: '100%' })};
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
const Amount = styled.span`
  border-radius: 5px;
  border: 1px solid teal;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: white;
  border: 2px soild teal;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease;
  &:hover{
    background-color: lightgrey;
    transform: scale(1.1);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src="https://beyoung.in/blog/wp-content/uploads/2019/04/full-sleeve-compressed-819x1024.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestiae, dignissimos quo earum excepturi, ipsa porro dolores minima cupiditate dolore facere! Distinctio harum similique rerum reiciendis consequuntur nulla, eum repellat.</Desc>
          <Price>Rs.1999</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Red" />
              <FilterColor color="Blue" />
              <FilterColor color="Black" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption selected>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>

            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>

      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product