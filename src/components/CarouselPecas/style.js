import styled from 'styled-components'

export const Container = styled.div`

`
export const Item = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:600px;
    width:100%;
    background-color:#fff;
    color:#fff;
    margin:0 10px;
    font-size:4em;
    @media(max-width: 768px){
        justify-content: start;
        padding: 0 10.17%;
        margin: 0;
    }
`