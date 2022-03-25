import React from 'react'
import styled from 'styled-components';

//local imports
import { images } from '../../Data';
import SpecialHeading from '../SpecialiHeading/SpecialHeading';
import {tablette, mobile} from '../../services/Responsive';

function ChefWord() {
  return (
    <Wrapper>
        <Image src={images.chef} alt='chef'/>
        <Text>
            <SpecialHeading  title="Chef's Word" alignement='left'/>
            <Title>What We Believe In</Title>
            <Paragraph>
                <Icon src={images.quote} alt='quote'/>
                 This website is building with reactjs and styled components as a css
                library. If you have any question about the code source or any other
                problem you find with thisweb site you can just contact me.
            </Paragraph>
            <ChefInfo>
                <Name>Kevin Luo</Name>
                <Job>Chef & Founder</Job>
            </ChefInfo>
            <Signature src={images.sign} alt='signature'/>
        </Text>
    </Wrapper>
  )
}

export default ChefWord

const Wrapper = styled.section`
background-image: url("assets/images/bg.png");
display: flex;
align-items: center;
padding: 100px 120px;
${tablette({padding: '60px 20px'})}
${mobile({flexDirection: 'column'})}
`

const Image = styled.img`
flex: 1;
max-width: 450px;
margin-right: 40px;
${tablette({maxWidth: '320px'})};
${mobile({maxWidth: '90%', margin: 0})};
`

const Text = styled.div`
${mobile({textAlign: 'center', marginTop: '50px'})};
`
const Title = styled.h1`
color: var(--color-gold);
margin: 0;
font-size: 65px;
font-weight: 500;
`
const Paragraph = styled.p`
color: var(--color-grey);
line-height: 1.7;
font-family: var(--font-openSans);
margin: 50px 0;
font-style: italic;
`

const Icon = styled.img`
width: 30px;
height: 30px;
`

const ChefInfo = styled.div``

const Name = styled.h3`
font-size: 30px;
margin-bottom: 20px;
color: var(--color-gold);
`

const Job = styled.span`
font-size: 20px;
color: var(--color-grey);
font-family: var(--font-openSans);
font-weight: 300;
`

const Signature = styled.img`
width: 200px;
margin-top: 20px;
`