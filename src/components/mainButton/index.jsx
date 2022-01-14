import { StyledButton, StyledSpan } from "./style";

export default function MainButton(props){
    return(
        <StyledButton>
            <StyledSpan>{props.title}</StyledSpan>
        </StyledButton>
    )
}