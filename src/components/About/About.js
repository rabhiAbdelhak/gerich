import React from "react";
import styled from "styled-components";
import {mobile, miniMobile} from '../../services/Responsive'

function About() {
  return (
    <Wrapper className="_flex_center">
      <ImageCenter src="assets/images/aboutg.png" alt="centerimage" />
      <TextLeft>
        <Title>About Us</Title>
        <Line src="assets/images/spoon.svg" alt='spoon' right/>
        <Paragraph>
          This website is building with reactjs and styled components as a css
          library. If you have any question about the code source or any other
          problem you find with thisweb site you can just contact me.
        </Paragraph>
        <Button className='_gold_btn'>Know More</Button>
      </TextLeft>
      <Image src='assets/images/knife.png' alt='knifeimage'/>
      <TextRight>
        <Title>Our History</Title>
        <Line src="assets/images/spoon.png " alt='spoon' />
        <Paragraph>
          This website is building with reactjs and styled components as a css
          library. If you have any question about the code source or any other
          problem you find with thisweb site you can just contact me.
        </Paragraph>
        <Button className='_gold_btn'>Know More</Button>
      </TextRight>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.div`
  background-image: url("assets/images/bg.png");
  padding: 50px;
  position: relative;
  color: white;
  ${miniMobile({padding: '10px'})}
  ${mobile({flexDirection: 'column'})}
`;
const ImageCenter = styled.img`
  position: absolute;
  top: 50%;
  width: 300px;
  height: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;

const TextLeft = styled.div`
  text-align: right;
  position: relative;
  ${mobile({textAlign: 'center'})}
`;

const Image = styled.img`
height: 500px;
margin: 0 40px;
position: relative;
${mobile({transform: 'rotate(270deg)', margin: '-100px 0', height:'90vw'})}
${miniMobile({margin:'-50px 0'})}

`
const TextRight = styled.div`
  text-align: left;
  position: relative;
  ${mobile({textAlign: 'center'})};
`;

const Title = styled.h1`
  margin: 0;
  color: var(--color-gold);
  font-size: 50px;
`;

const Line = styled.img`
${props => props.right ? 'transform: rotate(180deg)' : ''};
`;

const Paragraph = styled.p`
color: var(--color-grey);
font-family: var(--font-openSans);
font-size: 14px;
line-height: 1.7;
margin: 30px 0;
` 
const Button = styled.button`
`
