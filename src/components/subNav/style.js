import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const NavBar = styled(Nav)`
    display:flex;
    justify-content:center;
    width:100%;
    height:50px;
    background-color:white;
    border-top:2px solid rgba(1.2,0,0,0.1);
    box-shadow: 10px 5px 5px black;
    @media(max-width:768px){
        display:none;
    }
`

export const Text = styled.p`
    margin:10px;
    padding-left:50px;
`

export const DressIcon = styled.img`
    width:24px;
    height:24px;
    margin:3px;
`
export const TextDestaque = styled.p`
    margin:10px;
    padding-left:50px;
    color:orange;
    font-weight:bold;
`