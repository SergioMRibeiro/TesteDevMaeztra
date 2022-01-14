import { Container, FlagIcon, SocialIcon, IconContainer, EngineContainer, VtexText, VetexLogo, MaeztraLogo, MaeztraText } from "./style";


import facebookIcon from '../../images/facebook.png'
import instagramIcon from '../../images/instagram.png'
import youtubeIcon from '../../images/youtube.png'
import linkedinIcon from '../../images/linkedin.png'
import visaIcon from '../../images/visa1.png'
import mastercardIcon from '../../images/mastercard1.png'
import vetexLogo from '../../images/VtexLogoBranca.png'
import maeztraLogo from '../../images/maeztraLogoFooter.png'


export default function Footer() {
    return (
        <>
            <Container>
                <IconContainer>
                    <SocialIcon style={{ backgroundImage: `url(${facebookIcon})` }} />
                    <SocialIcon style={{ backgroundImage: `url(${linkedinIcon})` }} />
                    <SocialIcon style={{ backgroundImage: `url(${instagramIcon})` }} />
                    <SocialIcon style={{ backgroundImage: `url(${youtubeIcon})` }} />
                </IconContainer>

                <IconContainer>
                    <FlagIcon style={{ backgroundImage: `url(${visaIcon})` }} />
                    <FlagIcon style={{ backgroundImage: `url(${mastercardIcon})` }} />
                    <FlagIcon style={{ backgroundImage: `url(${visaIcon})` }} />
                    <FlagIcon style={{ backgroundImage: `url(${mastercardIcon})` }} />
                </IconContainer>

                <IconContainer>
                    <EngineContainer>
                        <VtexText>Powered by</VtexText>
                        <VetexLogo style={{ backgroundImage: `url(${vetexLogo})` }} />
                    </EngineContainer>

                    <EngineContainer>
                        <MaeztraText>Developed by</MaeztraText>
                        <MaeztraLogo style={{ backgroundImage: `url(${maeztraLogo})` }} />
                    </EngineContainer>
                </IconContainer>

            </Container>
        </>
    )
}