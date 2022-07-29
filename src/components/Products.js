import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from '../components/Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map((popularProduct) => {
        return <Product item={popularProduct} key={popularProduct.id} />
      })}
    </Container>
  )
}

export default Products