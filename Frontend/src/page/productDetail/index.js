// tools
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import{addToCards}from "../../redux/actions/cardActions"
// action
import { getProductDetails } from "../../redux/actions/productActions";
// component
import BootonBlack from "../../components/Buttons/buttonBlack/index"
// style
import {
  AddCardToShop,
  CardsDetail,
  DetailCardPage,
  ContainrtInfo,
  DescriptionCardDetail,
  ImgDetailCard,
  OptionCard,
  LoadingAndErrorText,
  NamedetailProduct,
} from "./view";

function ProductDetail() {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { error, loading, product } = productDetails;

  // get id frpm url
  const { id } = useParams();

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

// finction for handel button for add product to shop
const addToShopingHandeler = ()=>{
  dispatch(addToCards(product._id,qty));
 
}


  return (
    <DetailCardPage>
      {loading ? (
        <LoadingAndErrorText>loading...</LoadingAndErrorText>
      ) : error ? (
        <LoadingAndErrorText>{error}</LoadingAndErrorText>
      ) : (
        <>
          <CardsDetail>
            <ImgDetailCard alt={product.name} src={product.imageUrl} />
            <ContainrtInfo>
              <NamedetailProduct>{product.name}</NamedetailProduct>
              <DescriptionCardDetail>
                {product.description}
              </DescriptionCardDetail>
              <p>{product.price}</p>
              <BootonBlack
                route="/shop"
                value="Add Product"
                event={addToShopingHandeler}
              />
  
            </ContainrtInfo>
          </CardsDetail>

          {/* this tag is for choose more products */}
          <OptionCard>vfdbnflbnjfofidnlivjsx</OptionCard>
          {/* thid price is for all price products */}
          <p>{product.price}</p>
          <p>{product.countInStock > 0 ? "in stock" : "out of stock"}</p>

          <section>
            <select
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </section>
        </>
      )}
    </DetailCardPage>
  );
}

export default ProductDetail;
