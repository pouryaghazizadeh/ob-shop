import React from "react";
// style
import {
  DescriptionCard,
  ImgCard,
  LinkView,
  PriceCard,
  ProductCard,
  TitleCard,
} from "./view";

function Product({ imageUrl,name,price,description ,productId}) {
  return (
    <ProductCard>
      <TitleCard>{name}</TitleCard>
      <ImgCard alt={name} src={imageUrl} />
      <DescriptionCard>{description.substring(0,100)}...</DescriptionCard>
      <PriceCard>Price:${price}</PriceCard>

      <LinkView to={`/cardDetail/:${productId}`}>view</LinkView>
    </ProductCard>
  );
}

export default Product;
