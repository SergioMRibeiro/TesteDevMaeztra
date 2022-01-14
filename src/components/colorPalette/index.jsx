import { Pallet } from "./style";

export default function ColorPalette(props) {
    return (
        <>
            <Pallet style={{backgroundColor:`${props.color}`}}/>
        </>
    )
}