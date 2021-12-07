import React from 'react'
import { Link } from 'react-router-dom';
// style 
import {
  ProductCard,
  ImgCard,
  TitleCard,
  DescriptionCard,
  LinkView,
  PriceCard,
} from "./view";
function Product() {
    return (
      <ProductCard>
        <TitleCard>heeeloooo</TitleCard>
        <ImgCard
          alt="ff"
          src="https://images.unsplash.com/photo-1638708012834-fed2bf506e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <DescriptionCard>
          gklnfen gkfejlkg kfsdklgnfe kferjgp kgjkrep kgnreop ifenro eokrf kfeov
          kiefnv ofknbv orbfneo kfoebn
        </DescriptionCard>
        <PriceCard>Price:$120</PriceCard>
        <LinkView to="/cardDetail:id">view</LinkView>
      </ProductCard>
    );
}

export default Product
