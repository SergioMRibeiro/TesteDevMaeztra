import { Container, Seach, StyledTitle, Submit } from "./style"

export default function Newsletter() {
    return (
        <>
            <Container>
                <StyledTitle>Recebe Nossa Newsletter</StyledTitle>
                <div>
                    <Seach type="text" placeholder="O Que Você Busca" />
                    <Submit type="submit" value='Enviar' />
                </div>
            </Container>
        </>
    )
}