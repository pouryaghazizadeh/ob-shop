// tools
import { useDispatch, useSelector } from "react-redux";
import ButtonBlack from "../../components/Buttons/buttonBlack/index";
// components
import CardShop from "../../components/cardShop/index";
import { addToCards, removeFromCard } from "../../redux/actions/cardActions";
// style
import { ContainerCard, InfoBuy, ShopPage } from "./view";

function Shop() {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);
  const { cardItems } = card;
  // for handel and update qty
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCards(id, qty));
  };
  // for remove card from shop component this is props to cardShop component
  const removeHandler = (id) => {
    dispatch(removeFromCard(id));
  };
  // for subtotal
  const getCardCount = () => {
    return cardItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  //  for price
  const getCardSubTotal = () => {
    return cardItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  console.log(cardItems);
  return (
    <ShopPage>
      <ContainerCard>
        {cardItems.length === 0 ? (
          <>
            <h2>your card is empty</h2>
            <ButtonBlack route="/products" value="Product Page" />
          </>
        ) : (
          cardItems.map((item) => (
            <CardShop
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </ContainerCard>
      <InfoBuy>
        <p>subtotal ( {getCardCount()} )item</p>
        <p>${getCardSubTotal().toFixed(2)}</p>
        <ButtonBlack route="#" value="Buy" />
      </InfoBuy>
    </ShopPage>
  );
}

export default Shop;
