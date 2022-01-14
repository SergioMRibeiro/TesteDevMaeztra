import { Figure, Navbar } from "react-bootstrap";
import styled from "styled-components";


export const StyledFigure = styled(Figure)`
    margin: 30px ;
    width: 147px;
    height: 18px;
`

export const NavContainer = styled(Navbar)`
    width: 100%;
    padding: 0px 16px;
    background-color: #fff;
    @media(max-width:768px){
        padding:0px 5px;
    }
`

export const BagStyle = styled.img`
    width:14.38px;
    height:16px;
    margin:6px;
    @media(max-width:768px){
        display:none
    }
`
export const HeartIconStyle = styled.img`
    width:14px;
    height:16px;
    margin:6px;
    @media(max-width:768px){
        display:none
    }

`
export const AccountIconStyle = styled.img`
    width:14px;
    height:16px;
    margin:6px;
    @media(max-width:768px){
        display:none
    }

`
export const ImageBagMobile = styled.img`
    display:none;
    @media(max-width:768px){
        width:24px;
        height:24px;
        display:block;
        margin-left:0px;
        margin-right:10px;
        }
        
`

export const LogoMarca = styled.img`
    width:147px;
    height:18px;
    @media(max-width:768px){
        width:147px;
        height:18px;
        display:block;
        margin-left:0px;
        }
        @media (min-width: 400px) {
            max-width: 10em;
            justify-content:none;
        }
`

