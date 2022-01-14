import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Container, Image, InviteImage, InviteText, Seach, Submit, WelcomeContent, WelcomeTitle } from "./style";
import modalImage from '../../images/modalImage.png'
import message from '../../images/message.png'
import send from '../../images/send.png'
import './style.css'

function MyVerticallyCenteredModal(props) {
    //TODO É necessário criar o botão de fechar. Ainda assim é possível fechar o modal clicanco fora dele.
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Container>
                        <Image src={modalImage} alt="Corredor" />
                        <WelcomeContent>
                            <InviteImage src={message} alt="Mensagem Icon" />
                            <WelcomeTitle>Bem Vindo à MAEZTRA</WelcomeTitle>
                            <InviteText>Receba em Primeira mão </InviteText>
                            <InviteText bold>desconto e ofertas exclusivas</InviteText>
                            <Seach type="text" placeholder="Digite seu e-mail" />
                            <Submit type="submit">Enviar  <img src={send}></img></Submit>

                        </WelcomeContent>
                    </Container>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default function MainModal() {
    const [modalShow, setModalShow] = useState(true);

    return (
        <>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}