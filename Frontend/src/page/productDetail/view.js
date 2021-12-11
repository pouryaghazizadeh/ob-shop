import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailCardPage = styled.section`
  width: 100%;
  height: 100vh;
  background-color: green;
  margin-top: 75px;
  display: flex;
  align-items: center;

`;

export const LoadingAndErrorText = styled.h2`
  font-size: 45px;
  color: #1d1d1f;
`;

export const CardsDetail = styled.section`
  width: 70vw;
  height: 80%;
  background: blue;
  display: flex;
  align-items: flex-start;
  
`;
export const NamedetailProduct = styled.h3`
font-size:xx-large
`

export const ContainrtInfo = styled.div``;

export const ImgDetailCard = styled.img`
  width: 700px;
  height:80vh;
  
`;

export const DescriptionCardDetail = styled.p`
  font-size: x-large;
`;

export const OptionCard = styled.section``;

export const AddCardToShop = styled(Link)``;
