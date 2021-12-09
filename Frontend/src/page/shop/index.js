// tools

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// componrnts
import CardShop from "../../components/cardShop/index";
import { addToCards, removeFromCard } from "../../redux/actions/cardActions";
// style
import { ContainerCard, ContainerShop, InfoBuy } from "./view";

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
  const getCardCount =() => {
    return cardItems.reduce((item, qty) => Number(item.qty) + qty,0);

  };
  console.log(getCardCount());
  return (
    <ContainerShop>
      <ContainerCard>
        {/* component card */}
        {cardItems === 0 ? (
          <>
            <h3>your card is empty</h3>
            <Link to="/product">Go to the product</Link>
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
        <p>subtotal ({getCardCount()})ithem</p>
        <p>$123</p>
        <button>gfre</button>
      </InfoBuy>
    </ContainerShop>
  );
}

export default Shop;
