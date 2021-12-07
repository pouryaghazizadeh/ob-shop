// tools
import { useState } from "react";
// icons
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
// style
import {
  ContainerIcons,
  Header,
  Menu,
  Nav,
  NavLinks,
  NavLinksShop,
  ShopNumber,
  Title,
} from "./view";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // functions for change mood
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <Header>
      <Title>BrandShop</Title>
      <Nav click={click}>
        <Menu>
          <li>
            <NavLinksShop to="#">
              <FaShoppingCart />
              Cards
              <ShopNumber>01</ShopNumber>
            </NavLinksShop>
          </li>
          <li>
            <NavLinks to="#">Shops</NavLinks>
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
