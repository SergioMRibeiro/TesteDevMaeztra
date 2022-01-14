import { StyledSearch, StyledSubmit, ImageSearch } from "./style";
import Searching from "../../images/search.png"



export default function Search() {
    return (
        <>

                    <StyledSearch type="text" placeholder="O Que Você Busca" />
                    <StyledSubmit type="submit" value='Buscar' />

            <ImageSearch src={Searching}/>
        </>
    )
}
