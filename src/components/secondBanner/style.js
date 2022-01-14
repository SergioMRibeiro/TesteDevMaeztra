import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1082px) {
        flex-wrap: wrap;
        
    }

`
//TODO Cartar a imagem para max height: 630px  (object-fit: cover;);

export const Image = styled.img`
    width: 90%;
    max-height: 630px;
    border-radius: 4px;
    object-fit: cover;
    @media (min-width: 768px) {
        width:69.8%;
        max-width: 1113px;        
        object-fit: cover;
        
    }
`

export const Title = styled.h1`

    font-family: Titillium Web;
    font-weight: bold;
    font-size: 24px;
    line-height: 37px;
    margin-bottom: 8px;
    

`

export const Text = styled.p`
    font-family: Titillium Web;
    font-size: 14px;
    line-height: 21px;
    width: 420px;
    margin: 8px 0;

    @media (max-width: 768px) {
        width: 269px;
        left: 31px;
    }
`

export const TextContent = styled.div`
    margin-right: 3.8%;
    display: flex;
    flex-direction: column;
    justify-content: left;
`