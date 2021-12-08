import { Link } from "react-router-dom";
import styled from "styled-components";



export const ProductCards =styled.section`
background: plum;
width: 300px;
height: 400px;
display: flex;
justify-content: flex-start;
flex-direction:column;
align-items: center;
position: relative;

`

export const TitleCard = styled.span`
font-weight: bold;
font-size: x-large;



`


export const ImgCard = styled.img`
width: 90%;
height: 200px;

`

export const DescriptionCard = styled.p`
text-align: center;
font-weight: 600;
font-size: 17px;
margin: 3px;
`


export const LinkView = styled(Link)`
width: 98%;
height: 40px;
background: red;
text-align: center;
text-decoration: none;
font-size: x-large;
position: absolute;
bottom: 8px;


`

export const PriceCard = styled.p`
font-weight: bold;
color: black;
font-size:large;

text-align:start;
width: 100%;
height: 20px;
padding-left: 15px;


`