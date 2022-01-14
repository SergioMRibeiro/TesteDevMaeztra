import { useEffect, useState } from "react";
import { Container, MenuTile, MenuContainer, MenuOption, DropdownContent } from "./style"


//TODO Usar useEffect para lidar com a atualização do componente DropdownContent

export default function FooterMenu() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 780;


    var a = 'none'
    var b = 'none'
    var c = 'none'
    function expand(a) {
        a === 'block' ? a = 'none' : a = 'block';
        console.log(a)
        return a;
    }


    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width > breakpoint) {
        return (
            <>
                <Container>
                    <MenuContainer>
                        <MenuTile>Informações</MenuTile>
                        <MenuOption>Quem Somos</MenuOption>
                        <MenuOption>Prazo de Envio</MenuOption>
                        <MenuOption>Trocas e Devoluções</MenuOption>
                        <MenuOption>Promoções e Cupons</MenuOption>
                    </MenuContainer>

                    <MenuContainer>
                        <MenuTile>Minha Conta</MenuTile>
                        <MenuOption>Minha Conta</MenuOption>
                        <MenuOption>Meus Pedidos</MenuOption>
                        <MenuOption>Cadastre-se</MenuOption>
                    </MenuContainer>

                    <MenuContainer>
                        <MenuTile>Onde nos Encontrar</MenuTile>
                        <MenuOption>Lojas</MenuOption>
                        <MenuOption>Endereço</MenuOption>
                    </MenuContainer>

                </Container>
            </>
        );
    }




    return (
        <>
            <Container>
                <MenuContainer onClick={() => { expand(a) }}>
                    <MenuTile>Informações</MenuTile><MenuTile>+</MenuTile>
                    <DropdownContent style={{ display: `${a}` }}>
                        <MenuOption>Quem Somos</MenuOption>
                        <MenuOption>Prazo de Envio</MenuOption>
                        <MenuOption>Trocas e Devoluções</MenuOption>
                        <MenuOption>Promoções e Cupons</MenuOption>
                    </DropdownContent>
                </MenuContainer>

                <MenuContainer onClick={() => { expand(b) }}>
                    <MenuTile>Minha Conta</MenuTile><MenuTile>+</MenuTile>
                    <DropdownContent style={{ display: `${a}` }}>
                        <MenuOption>Minha Conta</MenuOption>
                        <MenuOption>Meus Pedidos</MenuOption>
                        <MenuOption>Cadastre-se</MenuOption>
                    </DropdownContent>
                </MenuContainer>

                <MenuContainer onClick={() => { expand(c) }}>
                    <MenuTile>Onde nos Encontrar</MenuTile><MenuTile>+</MenuTile>
                    <DropdownContent style={{ display: `${a}` }}>
                        <MenuOption>Lojas</MenuOption>
                        <MenuOption>Endereço</MenuOption>
                    </DropdownContent>

                </MenuContainer>
            </Container>
        </>
    )
}
