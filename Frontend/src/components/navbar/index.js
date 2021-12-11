// tools
import { useState } from "react";
import { useSelector } from "react-redux";
// icons
import { FaBars, FaTimes } from "react-icons/fa";
// component
import ButtonNavbar from "../Buttons/buttonNavbar";
// style
import {
  ContainerIcons,
  Header,
  Menu,
  Nav,
  NavLinksShop,
  ShopNumber,
  Title,
} from "./view";

const Navbar = () => {

  // use state for button mobile screen
  const [click, setClick] = useState(false);
  // functions for change mood bar
  const handelClick = () => {
    setClick(!click);
  };

  //update number in button
  const card = useSelector((state) => state.card);
  const { cardItems } = card;
  const getCardCount = () => {
    return cardItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <Header>
      <Title to="/">BrandShop</Title>
      <Nav click={click}>
        <Menu>
          <li>
            {/* button component */}
            <ButtonNavbar route="/products" value="Product" />
          </li>
          <li>
            {/* this button have style in this component */}
            <NavLinksShop to="/shop">
              shop
              <ShopNumber>{getCardCount()}</ShopNumber>
            </NavLinksShop>
          </li>
        </Menu>
      </Nav>
      <ContainerIcons onClick={handelClick} click={click}>
        {click ? <FaTimes /> : <FaBars />}
      </ContainerIcons>
    </Header>
  );
};

export default Navbar;
