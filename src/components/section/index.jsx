import { Tittle, Box } from "./style";

export default function Section(props) {
    return (
        <>
            <Box>
                <Tittle>{props.title}</Tittle>
            </Box>
        </>
    )
}