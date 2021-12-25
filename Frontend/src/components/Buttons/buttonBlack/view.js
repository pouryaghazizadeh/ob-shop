import styled from "styled-components";
// tools
import { Link } from "react-router-dom";


export const ButtonBlacks = styled(Link)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  text-decoration: none;
  color: #fff;
  background-color: #090d11;
  &:hover {
    background-color: #fff;
    color: #090d11;
    border: 1px solid #090d11;

  }
`;