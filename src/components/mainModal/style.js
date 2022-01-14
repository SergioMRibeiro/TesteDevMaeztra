import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Image =  styled.img`
    flex: 1;
    height: 532.8287353515625px;
    width: 805px;
    max-width: 426px;
    

    @media (max-width: 780px) {
        display: none;
    }

`
export const InviteImage =  styled.img`
    margin: 0 auto;
    width: 28px;
    height: 29.66px;
`

export const WelcomeContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width:342px;
`
export const WelcomeTitle = styled.h3`
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 12px;

`

export const InviteText = styled.p`
font-family: Lato;
font-size: 20px;
font-style: normal;
line-height: 23px;
letter-spacing: 0px;
text-align: center;
color: #787D83;
    font-weight: ${props => props.bold ? "700" : 'normal'};


`


export const Seach = styled.input`
    margin: 0 auto;
    width: 80%;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 10px;
    @media (max-width: 930px) {

        height: 26px;
        border-radius: 4px;
    }

`

export const Submit = styled.button`
    margin: 12px auto ;
    width: 80%;
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