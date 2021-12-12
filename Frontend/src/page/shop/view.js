import styled from "styled-components";



export const ShopPage = styled.main`
  margin-top: 75px;
  display: flex;

  height: 100vh;
  padding: 10px;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    align-items: center;
   
  }
`;


export const ContainerCard = styled.section`
  width: 100%;
  min-height: 100px;
  display: flex;
  padding-top: 10px;
 padding-bottom: 10px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid;

  @media screen and (max-width: 870px) {
    margin-bottom: 10px;
  }
`;




export const InfoBuy = styled.section`
  width: 300px;
  background: rgba(49, 50, 50, 0.3);
  height: 200px;
  margin-left: 5px;
  font-size:x-large;
  @media screen and (max-width: 870px) {
    width: 98%;
    height: 100px;
  }
`;