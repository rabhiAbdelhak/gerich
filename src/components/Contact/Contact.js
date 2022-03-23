import React from 'react';
import styled from 'styled-components';

//local imports 
import SpecialHeading from '../SpecialiHeading/SpecialHeading';
import {images} from '../../Data';
import {mobile} from '../../services/Responsive';
 
function Contact() {
  return (
    <Wrapper>
        <Intro>
            <SpecialHeading title='Contact'/>
            <Title >Find Us</Title>
            <Paragraph>
                Go to the hell, there you'll find all your friends :) !
            </Paragraph>
            <OperatingHours>
                 <Title small>Operating Hours</Title>
                 <Info>Mon - Fri 10:00am 02:00am</Info>
                 <Info>Sat - Sun 10:00am 03:00am </Info>
            </OperatingHours>

            <Button className='_gold_btn'>Visit Us</Button>
        </Intro>
        <Image src={images.findus} alt='contact'/>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.section`
padding: 60px 100px;
background-image: url('assets/images/bg.png');
display: flex;
align-items: center;
justify-content: center;
${mobile({flexDirection:'column-reverse'})}
`
const Intro = styled.div`
${mobile({textAlign:'center', marginTop: '50px'})};
`

const Title = styled.h1`
margin: 20px 0 10px;
color: var(--color-gold);
font-size: ${props => props.small ? '16px' : '50px'};

`

const Image = styled.img`
width: 300px;
margin-left: 60px;
${mobile({margin:0})}
`

const Paragraph = styled.p`
color: var(--color-grey);
font-size: 1rem;
line-height: 1.7;
margin-top: 30px;
`

const OperatingHours = styled.div`

`
const Info = styled.p`
color: var(--color-grey);
font-size: 15px;
margin: 15px 0;
`

const Button = styled.button`
`