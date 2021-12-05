import React from 'react'
import Product from '../../components/product'
import { HomePage } from "./view";
function Home() {
    return (
      <HomePage>
        <Product />
        <Product />
        <Product />
        <Product />
      </HomePage>
    );
}

export default Home
