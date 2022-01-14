import styled from "styled-components";
import { Carousel } from 'react-bootstrap';
import MainButton from "../mainButton";

export const ContainerBanner = styled.div`
    display: flex;
    width: 100%;
    overflow-x: hidden;
    justify-content: center;
    @media (max-width: 745px) {
        min-width: 971px;
        
    }
    
`

export const ImageStyled = styled.img`
    width: 100%;
    @media (max-width: 971px) {
        min-width: 971px;
        
    }
`

export const ButtonCarousel = styled(MainButton)`
    font-family: Montserrat;
`
export const TextoCarousel = styled(Carousel.Caption)`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
`

//TODO - Importar font-family: Montserrat
export const TitleBanner = styled.h1` 
    margin:0;
    margin-bottom: 40px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 49px;
    color: #FFFFFF;
        @media (max-width:1080px) {
            font-size: 30px;
            line-height: 37px;
    }
`



export const DescriptionBanner = styled.p`
    margin-bottom: 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    @media (max-width:1080px) {
        font-size: 14px;
        line-height: 17px;
    }

`

export const CarrocelContent = styled.div`
    max-width: 471px;
    min-width: 223px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: initial;
    text-align: left;
    margin-top: 30px;
    padding-bottom: 10%;

`