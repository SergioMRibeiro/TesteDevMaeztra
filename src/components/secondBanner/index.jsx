import {
    Container,
    Image,
    Text,
    TextContent,
    Title 
} from "./style";
import image from '../../images/yellowDress.png'

export default function SecondBanner() {
    return (
        <>
            <Container>
                <TextContent>
                    <Title>Lorem ipsum</Title>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum mauris posuere fusce proin mattis.
                        Hendrerit cras ut nunc enim dictum.
                        Mattis proin ut quis donec sed eget nulla.
                        Vel mi ut mauris integer.
                        Nibh sagittis in lobortis sed cursus condimentum velit pharetra.
                        Amet luctus ut vulputate scelerisque placerat consequat.
                        Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
                        Feugiat id tortor eu mauris pulvinar velit massa.
                        Ut ornare augue eget convallis volutpat aliquet.
                        Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.
                    </Text>
                </TextContent>

                <Image src={image} alt="Nova Cpleção de outrono Inverno"/>


            </Container>
        </>
    )
}