//import components
import { Nav, Navbar } from "react-bootstrap";
import Search from '../search';
import SubNav from '../subNav/subnav'

//import style.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogoMarca, NavContainer, StyledFigure, BagStyle, HeartIconStyle, AccountIconStyle, ImageBagMobile } from './style';

// import images
import logo from '../../images/logo-maeztra-novo.png'
import bag from "../../images/bag.png"
import heart from "../../images/heart.png"
import account from "../../images/account.png"


export default function NavMenu() {

    return (
        <>
            <NavContainer collapseOnSelect expand="lg" id='NavbarBG'

            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    style={{ border: "none" }} />
                <StyledFigure>
                    <LogoMarca src={logo} />
                </StyledFigure>

                <Search />

                <ImageBagMobile src={bag} />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav className="mr-auto" id='TextoMenu'>

                        <Nav.Link href="/conta" style={{ color: "#353535" }}>
                            <AccountIconStyle src={account} />
                            Minha Conta
                        </Nav.Link>

                        <Nav.Link href="/conta" style={{ color: "#353535" }}>
                            <HeartIconStyle src={heart} />
                            Minha Conta
                        </Nav.Link>

                        <Nav.Link href="#deets" style={{ border: "1px solid #FAA500", borderRadius: "8px", color: "#353535" }}>
                            <BagStyle src={bag} />
                            Meu Carrinho
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </NavContainer>

            <SubNav />


        </>
    )
}