import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Product from '../components/Product';
import Products from '../components/Products';
import {mobile } from '../responsive';
const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;
  ${mobile({margin: '10px 5px'})};
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: 'column'})};
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: "5px",display: "flex",flexDirection: 'column'})};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option`

`;
const ProductList = () => {
  return (
    <Container>
      <Announcements/>
      <Navbar/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText> 
          <Select>
            <Option selected disabled>Yellow</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Violet</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Asscending) </Option>
            <Option>Price (Descending) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList