// tools 
import { useState } from "react";

// style
import {
  Header,
  Title,
  Nav,
  Menu,
  Item,
  NavLinks,
  NavLinksShop,
  ShopNumber,
  ContainerIcons,
} from "./view";


// icons
import { FaBars,FaTimes } from "react-icons/fa";

const Navbar = () => {
const [click,setClick] = useState(false)
// functions for change mood
const handelClick = ()=>{
  setClick(!click)
}
  return (
    <Header>
      <Title>BrandShop</Title>
      <Nav click={click}>
        <Menu>
          <li>
            <NavLinksShop to="#">
              Shop
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
