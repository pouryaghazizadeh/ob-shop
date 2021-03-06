import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCards = styled.section`
  background: #fff;
  width: 300px;
  height: 400px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: black;

  &:hover {
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
  }
`;

export const TitleCard = styled.span`
  font-weight: bold;
  font-size: x-large;
  color: #fff;
`;

export const ImgCard = styled.img`
  width: 90%;
  height: 200px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const DescriptionCard = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  margin: 3px;
  color: #fff;
`;

export const LinkView = styled(Link)`
  width: 98%;
  height: 40px;

  text-align: center;
  text-decoration: none;
  font-size: x-large;
  position: absolute;
  bottom: 8px;

  border: 1px solid #4cc5c6;
  color: #fff;
  &:hover {
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.3);
    background: #fff;
    color: black;
  }
`;

export const PriceCard = styled.p`
  font-weight: bold;
  color: #fff;
  font-size: large;

  text-align: start;
  width: 100%;
  height: 20px;
  padding-left: 15px;
`;
