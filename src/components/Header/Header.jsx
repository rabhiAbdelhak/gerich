import React from 'react'
import styled from 'styled-components';
import {tablette, mobile} from '../../services/Responsive';

function Header() {
  return (
    <Wrapper>
        <Text>
           <Title>
             <p>Chase the new flavor</p>
             <img src='assets/images/spoon.png' alt='spoon'/>
           </Title>
           <BigTitle>
             The key to Fine dining
           </BigTitle>
           <Paragraph>This website is building with reactjs and styled components as a css library.
             If you have any question about the code source or any other problem you find with thisweb site 
             you can just contact me.
           </Paragraph>
           <Button className='_gold_btn'>Explore Menu</Button>
        </Text>
        <Image src='assets/images/welcome.png' alt='maskgroup'/>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
padding: 50px 100px 100px;
background: var(--color-black);
color: white;
display: flex;
align-items: center;
${mobile({flexDirection: 'column-reverse', padding: '50px 40px 100px'})}
${tablette({padding: '50px 40px 60px'})}
`

const Text = styled.div`
flex: 1;
`
const Image = styled.img`
flex: 1;
margin-left: 100px;
max-width: 50%;
position: relative;
${mobile({maxWidth: '70%', margin:'0 0 40px 0'})};

::after{
  content:"";
  width: 50%;
  height: 50%;
  background: var(--color-gold);
  position: absolute;
  top:-20px;
  right: -20px;
}
`

const Title = styled.div`

p{
  margin: 0;
  text-transform: capitalize;
}
`
const BigTitle = styled.h1`
color: var(--color-gold);
font-size: 70px;
text-transform: capitalize;
${tablette({fontSize: '40px'})}
${mobile({fontSize: '40px'})}
`

const Paragraph = styled.p`
color: var(--color-grey);
font-size: 1rem;
line-height: 1.6;
margin: 30px 0;
`

const Button = styled.button`

`