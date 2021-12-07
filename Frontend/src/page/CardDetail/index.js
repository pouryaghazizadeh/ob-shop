import {
  AddCardToShop,
  CardsDetail,
  ContainerDetailCard,
  ContainrtInfo,
  DescriptionCardDetail,
  ImgDetailCard,
  OptionCard,
} from "./view";
function CardDetail() {
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
      <section>
        <p>price</p>
        <p>status:in store</p>
        <select value="qty">
     
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <p>price</p>
      </section>
    </ContainerDetailCard>
  );
}

export default CardDetail;
