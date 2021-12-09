// tools
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import{addToCards}from "../../redux/actions/cardActions"
// action
import { getProductDetails } from "../../redux/actions/productActions";
// style
import {
  AddCardToShop,
  CardsDetail,
  ContainerDetailCard,
  ContainrtInfo,
  DescriptionCardDetail,
  ImgDetailCard,
  OptionCard,
} from "./view";

function ProductDetail({ history }) {
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
  history.push("/shop");
}


  return (
    <ContainerDetailCard>
      {loading ? (
        <h2>loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <CardsDetail>
            <ImgDetailCard alt={product.name} src={product.imageUrl} />
            <ContainrtInfo>
              <p>{product.name}</p>
              <DescriptionCardDetail>
                {product.description}
              </DescriptionCardDetail>
              <p>{product.price}</p>
              <AddCardToShop to="#">Add Product</AddCardToShop>
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
            <button type="button" onClick={addToShopingHandeler}>add to shoping</button>
          </section>
        </>
      )}
    </ContainerDetailCard>
  );
}

export default ProductDetail;
