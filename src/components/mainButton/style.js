import styled from "styled-components";

export const StyledButton = styled.button`
    width: 119px;
    height: 40px;
    border-radius: 8px;
    border: 0px;
    background-color: #FAA500;
    color: #FFFFFF;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    @media (max-width: 780px) {
        width: 76px;
        height: 28px;
    }
    :hover {
        background-color: #F59000;
    }
`

export const StyledSpan = styled.span`
    width: 68px;
    height: 20px;
    left: calc(50% - 68px/2);
    top: calc(50% - 20px/2);

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    @media (max-width: 780px) {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
    }
`