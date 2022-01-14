import imageBanner from '../../images/imageBanner.bmp'
import { ButtonCarousel, CarrocelContent, DescriptionBanner, ImageStyled, TitleBanner } from './style'
import { Carousel, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CarrocelBanner() {
    return (
        <>
            <Carousel variant="dark" >

                <Carousel.Item>
                    <ImageStyled src={imageBanner} alt='Banner' />
                    <Carousel.Caption>
                        <CarrocelContent>
                            <TitleBanner>Promoções de Outono</TitleBanner>
                            <DescriptionBanner>
                                Confiras os melhores looks para combinar com você nesse Outono
                            </DescriptionBanner>
                            <ButtonCarousel title='Conferir' />
                        </CarrocelContent>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <ImageStyled src={imageBanner} alt='Banner' />
                    <Carousel.Caption>
                        <CarrocelContent>
                            <TitleBanner>Promoções de Outono</TitleBanner>
                            <DescriptionBanner>
                                Confiras os melhores looks para combinar com você nesse Outono
                            </DescriptionBanner>
                            <ButtonCarousel title='Conferir' />
                        </CarrocelContent>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}