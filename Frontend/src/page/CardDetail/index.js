// tools
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

function CardDetail({ history }) {
  const [qut, setQyt] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { error, loading, product} = productDetails;

  const params = useParams();


  useEffect(() => {
    if (product && params !== product._id) {
      dispatch(getProductDetails(params));
    }
  }, [dispatch, params, product]);



  
  return (
    <ContainerDetailCard>
      <CardsDetail>
        <ImgDetailCard
          alt="f"
          src="https://images.unsplash.com/photo-1638708012834-fed2bf506e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <ContainrtInfo>
          <DescriptionCardDetail>
            gklnfen gkfejlkg kfsdklgnfe kferjgp kgjkrep kgnreop ifenro eokrf
            kfeov kiefnv ofknbv orbfneo kfoebn
          </DescriptionCardDetail>
          <AddCardToShop to="#">Add Product</AddCardToShop>
        </ContainrtInfo>
      </CardsDetail>

      {/* this tag is for choose more products */}
      <OptionCard>vfdbnflbnjfofidnlivjsx</OptionCard>
      {/* <section>
        <p>price</p>
        <p>status:in store</p>
        <select value="qty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <p>price</p>
      </section> */}
    </ContainerDetailCard>
  );
}

export default CardDetail;
