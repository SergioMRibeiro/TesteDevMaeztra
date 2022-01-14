import styled from "styled-components";

export const Container = styled.div`
    margin-top: 64px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #353535;
    color: #fff;
    text-align: center;
    padding: 19px 161px;
    @media (max-width: 780px) {
        margin-top: 57px;
        padding: 24px 80px 35px 35px;
        justify-content: center;
    }
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 18px 0;
`

export const SocialIcon = styled.div`
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left:22px;
`

export const FlagIcon = styled.div`
    width: 32px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-left:22px;
`


export const EngineContainer = styled.div`
    text-align: left;
    margin-left: 22px;
`

export const VetexLogo = styled.div`
    width: 67.83px;
    height: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
`

export const MaeztraLogo = styled.div`
    width: 118.56px;
    height: 28.81px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
`

export const VtexText = styled.span`
font-family: Open Sans;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 14px;
letter-spacing: 0px;
text-align: left;
color: #FFFFFF;

`

export const MaeztraText = styled.span`
font-family: Open Sans;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 14px;
letter-spacing: 0px;
text-align: left;
color: #FFFFFF;

`