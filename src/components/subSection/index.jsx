import { propTypes } from "react-bootstrap/esm/Image";
import { Tittle,Box } from "./style";

export default function TitleSection(props) {
    return (
        <>
        <Box>
            <Tittle>{props.title}</Tittle>
        </Box>
        </>
        )
}