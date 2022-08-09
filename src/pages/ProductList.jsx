import React from 'react';
import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Announcements from '../components/Announcements';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
// import Product from '../components/Product';
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");
  
  const handleFilters = (e) => {
    setFilters({...filters,[e.target.name]: e.target.value})
  }
  console.log({...filters});
  console.log({sort});
  return (
    <Container>
      <Announcements/>
      <Navbar/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText> 
          <Select defaultValue="Color" name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="blue">Blue</Option>
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="red">Red</Option>
            <Option value="violet">Violet</Option>
            <Option value="grey">Grey</Option>
          </Select>
          <Select defaultValue="Size" name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" >Newest</Option>
            <Option value="asc">Price (Asscending) </Option>
            <Option value="desc">Price (Descending) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList