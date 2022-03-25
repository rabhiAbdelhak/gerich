import React from 'react'
import styled from 'styled-components';
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa';

// local imports 
import {images} from '../../Data';
import {mobile} from '../../services/Responsive';

function Footer() {
  return (
    <Wrapper>
        <Contact>
             <Title>Contact US</Title>
             <Paragraph>Street ABdennebi El Arbi Cite N°01 Oued Fodda</Paragraph>
             <Phone>+21356566778</Phone>
             <Phone>+33367787878</Phone>
        </Contact>
        <SocialMedia>
             <Title big>GERICHT</Title>
             <Paragraph>"The best way to find your self is to forget your self in the service or others"</Paragraph>
             <Image src={images.spoon} alt='spoon'/>
             <Sociallinks>
                 <FaInstagram/>
                 <FaFacebook/>
                 <FaTwitter/>
             </Sociallinks>
        </SocialMedia>
        <WorkingHours>
             <Title>Working Hours</Title>
             <Info>
                <span>Monday - Friday :</span>
                <span>08:00 - 12:00</span>
             </Info>
             <Info>
                <span>Saturday - Sunday :</span>
                <span>07:00 - 11:00</span>
             </Info>
        </WorkingHours>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
display: grid;
grid-template-columns : repeat(auto-fill, minmax(350px, 1fr));
gap: 20px;
background-image: url('assets/images/bg.png');
padding: 60px 70px;
font-size: 13px;
${mobile({padding: '40px 20px'})};
`;

const Contact = styled.div`
text-align: center;
`;

const SocialMedia = styled.div`
text-align: center`;

const WorkingHours = styled.div`
text-align: center`;

const Title = styled.h2`
color: var(--color-white);
margin : 20px 0;
font-size: ${props => props.big ? "50px" : "30px"};
${props => props.big && 'color: var(--color-gold)'};

`
const Info = styled.p`
color: var(--color-grey);
display: flex;
flex-direction: column;
align-items: center;
font-family: var(--font-openSans);
margin-bottom: 20px;
`

const Phone = styled.span`
color: var(--color-grey);
display: block;
font-family: var(--font-openSans);
margin-top: 10px;
`
const Paragraph = styled.p`
color: var(--color-gray);
line-height: 1.7;
margin-bottom: 20px;
color: var(--color-grey);
font-family: var(--font-openSans);
`

const Image = styled.img`
margin-top: 20px;
`

const Sociallinks = styled.div`
display: flex;
justify-content: center;
gap: 15px;
font-size: 20px;
color: var(--color-grey);
margin-top: 10px;
text-align:center;
`