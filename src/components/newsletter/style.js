import styled from "styled-components";
import { Title } from "../secondBanner/style";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
    border-top: 2px  solid #EFEFEF;
    border-bottom: 2px  solid #EFEFEF;
    margin: 80px 0px;
`
//TODO criar componente separado
export const StyledTitle = styled(Title)`
    
    margin-right: 15px;
`

export const Seach = styled.input`
    padding-left: 24px;
    outline: none;
    width: 630px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #353535;
    border-right: 0;
    box-sizing: border-box;
    border-radius: 4px 0 0 4px;
    @media (max-width: 930px) {
        border-right: 1px solid #353535;
        margin-right: 15px;
        width: 204px;
        height: 26px;
        border-radius: 4px;
    }

`

export const Submit = styled.input`
    width: 131px;
    height: 40px;
    background-color: #FAA500;
    color: #fff;
    border: 1px solid #FAA500;
    box-sizing: border-box;
    border-radius: 4px;
    :hover {
        background-color: #F59000;

    }
    @media (max-width: 930px) {
        width: 79px;
        height: 26px;
    }
`

