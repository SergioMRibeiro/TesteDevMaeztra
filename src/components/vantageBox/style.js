import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #EFEFEF;
    border-radius: 4px;
    padding: 11px 27px;
    margin:0px 7.5px;
    min-width: 308px;
    min-height: 64px;
`
export const StyledImg = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 22px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
`
export const VantageTitle = styled.h3`
    margin: 0;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* color-2-500 */
    color: #353535;
`
export const VantageSubtitle = styled.h4`
    margin: 0;
    font-family: Titillium Web;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* color-2-900 */
    color: #000000;
`