import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonNavbars = styled(NavLink)`
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
  &:hover{
      border: 1px solid

  }
`;
