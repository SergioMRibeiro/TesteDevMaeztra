import ColorPalette from "../colorPalette";
import HotProductContent from "../hotProductContent";
// import Tipbar from "../tipbar";

import dress01 from '../../images/dress01.png'
import dress02 from '../../images/dress02.png'

import Carousel from "react-elastic-carousel"
import {Item} from "./style"
import './CarouselPecas.css'


export default function CarouselPecas() {

    const breakpoint=[
        {width:1, itemsToShow:1},
        {width:550, itemsToShow:3},
        {width:1899, itemsToShow:5},
    ];

return (
    <>
        <Carousel breakPoints={breakpoint}>
            <Item>
            <HotProductContent
                image={dress01}
                value='R$ 500,00'
                title='Faux Suede Mini Skirt'
                discription='A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
            >

                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
            <Item>
            <HotProductContent
                image={dress02}
                value='R$ 320,00'
                title='Ruched Rose Print Mini Skirt'
                discription='A satin mini skirt featuring an allover floral print, ruched side 
                with self-tie closure, concealed back zipper, and a flounce hem.'
                >
                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
            <Item>
            <HotProductContent
                image={dress01}
                value='R$ 500,00'
                title='Faux Suede Mini Skirt'
                discription='A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
            >

                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
            <Item>
            <HotProductContent
                image={dress02}
                value='R$ 320,00'
                title='Ruched Rose Print Mini Skirt'
                discription='A satin mini skirt featuring an allover floral print, ruched side 
                with self-tie closure, concealed back zipper, and a flounce hem.'
            >

                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
            <Item>
            <HotProductContent
                image={dress01}
                value='R$ 500,00'
                title='Faux Suede Mini Skirt'
                discription='A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
            >

                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
            <Item>
            <HotProductContent
                image={dress02}
                value='R$ 320,00'
                title='Ruched Rose Print Mini Skirt'
                discription='A satin mini skirt featuring an allover floral print, ruched side 
                with self-tie closure, concealed back zipper, and a flounce hem.'
            >

                <ColorPalette color='#DEAC71' />
                <ColorPalette color='#D37164' />
                <ColorPalette color='#6497D3' />
                <ColorPalette color='#3C3B79' />
            </HotProductContent>
            </Item>
        
        </Carousel>
    </>
)}
// export default function CarouselPecas() {
//     return (
//         <>
//             <Tipbar>
//                 <HotProductContent
//                     image={dress01}
//                     value='R$ 500,00'
//                     title='Faux Suede Mini Skirt'
//                     discription='A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
//                 >

//                     <ColorPalette color='#DEAC71' />
//                     <ColorPalette color='#D37164' />
//                     <ColorPalette color='#6497D3' />
//                     <ColorPalette color='#3C3B79' />
//                 </HotProductContent>

//                 <HotProductContent
//                     image={dress02}
//                     value='R$ 500,00'
//                     title='Faux Suede Mini Skirt'
//                     discription='A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
//                 >

//                     <ColorPalette color='#1C1A19' />
//                     <ColorPalette color='#D84E4B' />
//                     <ColorPalette color='#CFC9B0' />
//                     <ColorPalette color='#EAE9E5' />
//                 </HotProductContent>

//                 <HotProductContent
//                     image={dress01}
//                     value='R$ 320,00'
//                     title='Ruched Rose Print Mini Skirt'
//                     discription='A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
//                 >

//                     <ColorPalette color='#DEAC71' />
//                     <ColorPalette color='#D37164' />
//                     <ColorPalette color='#6497D3' />
//                     <ColorPalette color='#3C3B79' />
//                 </HotProductContent>

//                 <HotProductContent
//                     image={dress02}
//                     value='R$ 500,00'
//                     title='Faux Suede Mini Skirt'
//                     discription='A faux suede mini skirt featuring exposed button-front closures and panel seam construction.'
//                 >

//                     <ColorPalette color='#1C1A19' />
//                     <ColorPalette color='#D84E4B' />
//                     <ColorPalette color='#CFC9B0' />
//                     <ColorPalette color='#EAE9E5' />
//                 </HotProductContent>

//                 <HotProductContent
//                     image={dress01}
//                     value='R$ 320,00'
//                     title='Ruched Rose Print Mini Skirt'
//                     discription='A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.'
//                 >

//                     <ColorPalette color='#DEAC71' />
//                     <ColorPalette color='#D37164' />
//                     <ColorPalette color='#6497D3' />
//                     <ColorPalette color='#3C3B79' />
//                 </HotProductContent>
//             </Tipbar>
//         </>
//     )
// }