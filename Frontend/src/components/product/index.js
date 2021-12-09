import React from "react";
// style
import {
  DescriptionCard,
  ImgCard,
  LinkView,
  PriceCard,
  ProductCards,
  TitleCard,
} from "./view";

function ProductCard({ imageUrl, name, price, description, productId }) {
  return (
    <ProductCards>
      <TitleCard>{name}</TitleCard>
      <ImgCard alt={name} src={imageUrl} />
      <DescriptionCard>{description.substring(0, 100)}...</DescriptionCard>
      <PriceCard>Price:${price}</PriceCard>

      <LinkView to={`/products/productDetail/${productId}`}>view</LinkView>
    </ProductCards>
  );
}

export default ProductCard;
