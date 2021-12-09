import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 75px;
  background: #090d11;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  z-index: 999;

  @media screen and (max-width: 870px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  margin-right: 10px;
  margin-left: 10px;
  color: #fff;
`;

export const Nav = styled.nav`
  width: 1300px;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
  transition: all 0.5s ease;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    position: absolute;
    top: 75px;
    left: ${({ click }) => (click ? "0px" : "-100%")};
    width: 100%;
    height: 100vh;
    background: #1d1d1f;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  width: 30%;
  height: 100%;
 
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    width: 100%;
    height: 50%;
  }
`;

export const NavLinksShop = styled(Link)`
  text-decoration: none;
  font-size: x-large;
  background: pink;
  padding: 4px;
  color: #fff;
 
  padding: 8px;
  &:hover {
    color: black;
    background: #fff;
  }
`;

export const NavLinks = styled(Link)`
  text-decoration: none;
  font-size: x-large;
  background: none;
  border: 1px solid #fff;

  padding: 8px;
  color: #fff;
  &:hover {
    color: black;
    background: #fff;
  }
`;
export const ShopNumber = styled.span`
  background: red;
  border-radius: 50px;
  padding: 2px;
`;

export const ContainerIcons = styled.div`
  font-size: xx-large;
  display: none;
  color: #fff;
  @media screen and (max-width: 870px) {
    display: block;
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;
