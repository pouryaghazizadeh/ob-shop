import styled from "styled-components";


export const CardContainer = styled.ul`
  list-style: none;
  width: 97%;
  height: 85px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(49, 50, 50, 0.3);
  border-top: 1px solid rgba(49, 50, 50, 0.3);
 
  @media screen and (max-width: 500px) {
    padding-left: 0px;
  }
`;
export const ItemsCards = styled.li`
  width: 100px;
  margin: 3px;
  @media screen and (max-width: 880px) {
    width: 70px;
  }
`;

export const ImgCard = styled.img`
height: 70px;
width: 50px;
`
export const TitleCard = styled.h4`
font-weight: bold;

`

export const SelectProductCard = styled.select`
width: 60px;
`


export const ContainerDeleteIcon  =styled.div`
background-color:silver;
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
font-size: xx-large;

`