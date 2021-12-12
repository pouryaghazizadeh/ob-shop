// tools
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// componrnts
import CardShop from "../../components/cardShop/index";
import { addToCards, removeFromCard } from "../../redux/actions/cardActions";
import ButtonBlack from "../../components/Buttons/buttonBlack/index"
// style
import { ContainerCard, ShopPage, InfoBuy } from "./view";

function Shop() {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);
  const { cardItems } = card;
  // for handel and update qty
  const qtyChangeHandeler = (id, qty) => {
    dispatch(addToCards(id, qty));
  };
  // for remove card from shop component this is props to cardShop component
  const removeHandeler = (id) => {
    dispatch(removeFromCard(id));
  };
  // for subtotal
  const getCardCount = () => {

       return cardItems.reduce((qty, item) => qty + Number(item.qty), 0);

  };

  //  for price
  const getcardSubTotal = () => {
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
              qtyChangeHandeler={qtyChangeHandeler}
              removeHandeler={removeHandeler}
            />
          ))
        )}
      </ContainerCard>
      <InfoBuy>
        <p>subtotal ( {getCardCount()} )ithem</p>
        <p>${getcardSubTotal().toFixed(2)}</p>
        <ButtonBlack route="#" value="Buy" />
      </InfoBuy>
    </ShopPage>
  );
}

export default Shop;
