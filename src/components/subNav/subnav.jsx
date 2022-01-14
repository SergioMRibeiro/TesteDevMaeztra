import 'bootstrap/dist/css/bootstrap.min.css';
import IconDress from "../../images/dressIcon.png"

import { NavBar,Text ,DressIcon,TextDestaque} from './style';

export default function subNav() {
    return (
        <>
           <NavBar>
               <TextDestaque>
                   <DressIcon src={IconDress}/>
                   Novidades</TextDestaque>
               <Text>Vestidos</Text>
               <Text>Roupas</Text>
               <Text>Sapatos</Text>
               <Text>Lingerie</Text>
               <Text>Acessórios</Text>
               <Text>OUTLET</Text>

           </NavBar>
            
        </>
    )};