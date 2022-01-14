import styled from "styled-components";
import { StyledButton, StyledSpan } from "../mainButton/style";

export const Container = styled.div`
    max-width: 308px;
    height:626px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    padding: 8px;

`

export const StyledImage = styled.div`
    /* top: -42px; */
    width: 308px;
    height: 381px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
export const ColorContent = styled.div`
    display: flex;

`
export const ProductExample = styled.div`
    height: 423px;
`


export const InformationContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const Valor= styled.h2`
    margin: 0;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
`

export const TitleClothes = styled.h2`
    margin: 2px 0 4px 0;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`

export const DescriptionClothes = styled.p`
    margin: 4px 0 4px 0;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    opacity: 0.5;
`

export const StyledButtonTypeCard = styled(StyledButton)`
    width: 100%;

`

export const StyledSpanTypeCard = styled(StyledSpan)`

`

export const AddButtonContent = styled.div`
    margin-top: 4px;
    width: 100%;
    display: flex;
    height: inherit;
    justify-content: end;
    align-items: flex-end;

`

