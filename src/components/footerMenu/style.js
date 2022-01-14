import styled from 'styled-components'


export const Container = styled.div`
    margin: 0px 33px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 780px) {
        flex-direction: row;
        margin: 0 25%;
    }
`

export const MenuContainer = styled.div`
    margin-top: 8.5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    :hover {
        cursor: pointer;
    }
    @media (min-width: 780px) {
        flex-direction: column;
        :hover {
        cursor: default;
    }
    }
`

export const MenuTile = styled.h1`
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #353535;


`

export const MenuOption = styled.span`
    display: flex;
    flex-direction: column;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    :hover {
        cursor: pointer;
    }
    @media (min-width: 780px) {
        margin-top: 25px;
    }
`

export const DropdownContent = styled.div`
    display: none;
    /* position: absolute; */
    background-color: #f9f9f9;
    min-width: 100%;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    
`


