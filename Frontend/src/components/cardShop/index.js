// icons
import {MdDelete}from "react-icons/md"
// style
import {
  CardContainer,
  ImgCard,
  TitleCard,
  SelectProductCard,
  ContainerDeleteIcon,
  ItemsCards,
} from "./view";

function CardShop({ item, qtyChangeHandeler, removeHandeler }) {
  return (
    <CardContainer>
      <ItemsCards>
        <ImgCard alt={item.name} src={item.imageUrl} />
      </ItemsCards>
      <ItemsCards>
        <TitleCard>{item.name}</TitleCard>
      </ItemsCards>
      <ItemsCards>
        <p>${item.price}</p>
      </ItemsCards>

      <ItemsCards>
        <SelectProductCard
          value={item.qty}
          onChange={(e) => qtyChangeHandeler(item.product, e.target.value)}
        >
          {[...Array(item.countInStock).keys()].map((v) => (
            <option key={v + 1} value={v + 1}>
              {v + 1}
            </option>
          ))}
        </SelectProductCard>
      </ItemsCards>
      <ItemsCards>
        <ContainerDeleteIcon onClick={() => removeHandeler(item.product)}>
          <MdDelete />
        </ContainerDeleteIcon>
      </ItemsCards>
    </CardContainer>
  );
}

export default CardShop;
