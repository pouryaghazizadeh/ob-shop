import styled from "styled-components";

export const DetailCardPage = styled.main`
  width: 100%;
  height: 100vh;
  margin-top: 75px;
  display: flex;

  @media screen and (max-width: 870px) {
    margin-top: 75px;
    justify-content: center;
    align-items: stretch;
  }
`;

export const LoadingAndErrorText = styled.h2`
  font-size: 45px;
  color: #1d1d1f;
`;

export const CardsDetail = styled.div`
  width: 70vw;
  height: 80%;
  border: 1px solid rgba(9, 14, 18, 0.3);
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 2px;
  margin-top: 10px;
  margin-left: 10px;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    height: 800px;
    margin-top: 40px;
  }
`;
export const NamedetailProduct = styled.h3`
  font-size: xx-large;
`;

export const ContainrtInfo = styled.div`
  width:40vw;
  @media screen and (max-width: 870px) {
    width: 100%;
  
    height: 400px;
  }
`;

export const ImgDetailCard = styled.img`
  width: 50%;
  height: 79vh;
  @media screen and (max-width: 870px) {
    width: 100%;
    height: 400px;
  }
`;

export const DescriptionCardDetail = styled.p`
  font-size: x-large;
  color: rgba(51, 51, 50,01);
   @media screen and (max-width: 1203px) {
    font-size: large;
  }
`;

export const ProceAndStock = styled.p`
  font-size: large;
  font-weight:bold;
 
`;

export const SelectDetail = styled.select`
  width: 120px;
  height: 35px;
  outline: none;
  font-size: large;
  margin:15px 0px 15px 0px;
`;
