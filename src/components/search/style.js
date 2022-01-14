import styled from 'styled-components';


export const StyledForm = styled.form`
    width: 100%;
`

export const FormContainer = styled.div`
    display: inline;
    width: 41.19%;
    min-width: 281px;
    margin-left: 53px;
    background-color: #EFEFEF;
    border-radius: 10px;
    
`

export const StyledSearch = styled.input`
    width: 41.19%;
    height: 40px;
    background-color: #EFEFEF;
    border-radius: 10px;
    color: #353535;
    border: 0;
    outline: none;
    padding-left: 24px;
    @media(max-width:768px){
        display:none
    }
`;

export const StyledSubmit = styled.input`
    width: 119px;
    height: 40px;
    border-radius: 8px;
    border: 0px;
    background-color: #FAA500;
    color: #FFFFFF;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    margin-left:-10px;
    @media(max-width:768px){
        display:none
    }

`

export const ImageSearch = styled.img`
    display:none;
    @media(max-width:768px){
        width:24px;
        height:24px;
        justify-content:space-between;
        display:flex
    }

`

