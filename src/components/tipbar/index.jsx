import { Container } from "./style";

export default function Tipbar(props) {
    return (
        <>
            {/*TODO esconder o scroll */}
            <Container>
                {props.children}
            </Container>
        </>
    )
}