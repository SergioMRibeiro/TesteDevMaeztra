//Components import
import CarrocelBanner from '../components/carrocelBanner';
import Header from '../components/header';
import Tipbar from '../components/tipbar';
import Section from '../components/section';
import NavMenu from '../components/navMenu';
import SubSection from '../components/subSection';
import VantageBox from '../components/vantageBox';
import CarouselPecas from '../components/CarouselPecas';
import SecondBanner from '../components/secondBanner';
import Newsletter from '../components/newsletter';
import FooterMenu from '../components/footerMenu';
import Footer from '../components/footer';
import MainModal from '../components/mainModal';

// images import
import logoannTaylor from '../images/annTaylor.bmp'
import logoForever21 from '../images/forever21.bmp'
import logoMelissa from '../images/melissa.bmp'
import logoZara from '../images/zara.bmp'
import logoComma from '../images/comma.bmp'


//icons import
import worldIcon from '../images/worldIcon.png'
import tuckIcon from '../images/tuckIcon.png'
import tagIcon from '../images/tagIcon.png'
import shedIcon from '../images/shedIcon.png'
import boxIcon from '../images/boxIcon.png'


// styles import
import { Container, LogoStyle } from './style';


function App() {
    return (
        <>
            <Header />
            <NavMenu />
            <CarrocelBanner />

            <Container>
                <div>
                    <SubSection title='Por que comprar na Maeztra?' />
                    <Tipbar>
                        <VantageBox image={worldIcon} title='Produtos importados' subtitle='Produto de Alta Qualidade' />
                        <VantageBox image={shedIcon} title='Estoque no Brazil' subtitle='Produtos mais perto de você!' />
                        <VantageBox image={boxIcon} title='Trocas Garantidas' subtitle='Trocas em até 48 horas, vejas as regras' />
                        <VantageBox image={tagIcon} title='Ganhe 5% off' subtitle='Pagando à vista no Cartão' />
                        <VantageBox image={tuckIcon} title='Frete Grátis' subtitle='Em compras acima de R$ 499,00' />
                    </Tipbar>
                </div>

                <div>
                    <Section title='Marcas Parceiras' />
                    <Tipbar>
                        <LogoStyle src={logoComma} alt="Logomarca Comma" />
                        <LogoStyle src={logoMelissa} alt="Logomarca Melissa" />
                        <LogoStyle src={logoForever21} alt="Logomarca Forever 21" />
                        <LogoStyle src={logoZara} alt="Logomarca Zara" />
                        <LogoStyle src={logoannTaylor} alt="Logomarca Taylor" />
                    </Tipbar>
                </div>
                <Section title='As Mais Pedidas' />
                <CarouselPecas />

                <SecondBanner/>
                <Newsletter/>
            </Container>
            <FooterMenu/>
            <Footer/>
            <MainModal/>
        </>
    );
}

export default App;
