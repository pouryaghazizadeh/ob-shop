import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 75px;
  background: #090d11;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 870px) {
    justify-content: flex-start;
  }
`;

export const Title = styled(NavLink)`
  margin-right: 10px;
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 40px;
  width: 310px;
  @media screen and (max-width: 870px) {
    font-size: 35px;
    width: 240px;
  }
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

export const NavLinksShop = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 45px;
  color: #fff;
  text-decoration: none;
  font-size: x-large;
  &.active {
    border-bottom: 2px solid #4cc5c6;
  }
  &:hover {
    border: 1px solid;
  }
`;

export const ShopNumber = styled.div`
  background: #b2b2b2;
  border-radius: 50%;
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
