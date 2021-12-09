// icons
import {MdDelete}from "react-icons/md"
// style
import {
  CardContainer,
  ImgCard,
  TitleCard,
  SelectProductCard,
  ContainerDeleteIcon,
} from "./view";

function CardShop({ item, qtyChangeHandeler, removeHandeler }) {
  return (
    <CardContainer>
      <ImgCard alt={item.name} src={item.imageUrl} />
      <TitleCard>{item.name}</TitleCard>
      <p>${item.price}</p>
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
      <ContainerDeleteIcon onClick={()=>removeHandeler(item.product)}>
        <MdDelete />
      </ContainerDeleteIcon>
    </CardContainer>
  );
}

export default CardShop;
