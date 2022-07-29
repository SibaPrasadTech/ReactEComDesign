import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  background-color: white;
  border: ${props => props.type === "filled" ? "none" : "" };
  background-color: ${ (props) => 
  props.type === "filled" ? "black" : "transparent" };
  color: ${(props) => props.type === "filled" ? "white" : "black" };
`;
const TopTextContainer = styled.div`
  ${mobile({display: 'none'})};
`;
const TopText = styled.span`
  margin: 0px 10px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
`;
const Bottom = styled.div`
  margin: 10px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: 'column'})};
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span`
  font-weight: 400;
`;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 10px 10px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

const Hr = styled.hr`
  height: 2px;
  background-color: #e3e3e3;
  margin: 5px 0px;
  border: none;
`;
const Summary = styled.div`
  margin: 0px 0px 0px 5px;
  flex: 1;
  padding: 10px;
  border: 0.5px solid silver;
  border-radius: 10px;
  height: 50vh;
  ${mobile({marginTop: '20px'})};
`;
const SummaryTitle = styled.h1`
  /* font-size: 24px; */
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin-top: ${props => props.type === "total" ? "20px" : "10px" };
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500" };
  font-size: ${props => props.type === "total" && "24px" };
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: #000000;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton >CONTINUE SHOPPING</TopButton>
          <TopTextContainer>
            <TopText>Shoping Bag(2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTextContainer>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://rukminim1.flixcart.com/image/714/857/jsuoivk0/shoe/z/s/u/plain-led-black-shoes-8-5-mr-shoes-black-original-imafeax7txqagmqw.jpeg?q=50"/>
                <Details>
                  <ProductName><b>Product Name: </b> LIGHTNING SHOES</ProductName>
                  <ProductId><b>Product ID: </b> 2329</ProductId>
                  <ProductColor color="black"/>
                  <ProductSize><b>Size: </b> 9 (UK)</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Rs. 5600</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFu81eavVCClQ6i92tis9qyXpdBbCkgb6lw&usqp=CAU"/>
                <Details>
                  <ProductName><b>Product Name: </b> Sakura TShirt</ProductName>
                  <ProductId><b>Product ID: </b> 3320</ProductId>
                  <ProductColor color="Blue"/>
                  <ProductSize><b>Size: </b> 40 (UK)</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>1</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Rs. 799</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs 6399</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- Rs 99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>Rs 6399</SummaryItemPrice>
            </SummaryItem>
            <Button>CHCEKOUT</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart