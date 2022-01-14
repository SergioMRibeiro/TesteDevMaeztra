import { Container, StyledImg, TextBox, VantageSubtitle, VantageTitle } from "./style";

export default function VantageBox(props){
    return(
        <>
            <Container>
                <StyledImg src={props.image} alt="Icon" />
                {/* TODO a linha a baixo não foi continuada pois os icones que foram utilizados não estão em boa qualidade  */}
                {/* <StyledImg style={{ backgroundImage: `url(${imagem})`}} /> */}
                <TextBox>
                    <VantageTitle>{props.title}</VantageTitle>
                    <VantageSubtitle>{props.subtitle}</VantageSubtitle>
                </TextBox>
            </Container>
        </>
    )
}