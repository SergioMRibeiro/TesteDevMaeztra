import {
    AddButtonContent,
    ColorContent,
    Container,
    DescriptionClothes,
    InformationContent,
    ProductExample,
    StyledButtonTypeCard,
    StyledImage,
    StyledSpanTypeCard,
    TitleClothes,
    Valor
} from "./style";


export default function HotProductContent(props) {
    return (
        <>

            <Container>
                <ProductExample>
                    {/* TODO Passar imagem como prop */}
                    <StyledImage style={{
                        backgroundImage: `url(${props.image})`
                    }} />

                    <ColorContent>
                        {props.children}
                    </ColorContent>
                </ProductExample>

                <InformationContent>
                    <Valor>{props.value}</Valor>
                    <TitleClothes>{props.title}</TitleClothes>

                    <div>
                        <DescriptionClothes>{props.discription}</DescriptionClothes>
                    </div>


                </InformationContent>
                    <AddButtonContent>
                        <StyledButtonTypeCard>
                            <StyledSpanTypeCard>Adcionar</StyledSpanTypeCard>
                        </StyledButtonTypeCard>
                    </AddButtonContent>
            </Container>
        </>
    )
}