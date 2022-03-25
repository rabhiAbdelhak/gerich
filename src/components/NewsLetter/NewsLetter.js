import React from 'react';
import styled from 'styled-components';

//local imports 
import SpecialHeading from '../SpecialiHeading/SpecialHeading';
import {mobile} from '../../services/Responsive';

function NewsLetter() {
  return (
    <Wrapper>
        <Content>
           <SpecialHeading title='NewsLetter'/>
           <Title>Subscribe to the newsletter</Title>
           <Paragraph>And never miss the latest update !</Paragraph>
           <Form onSubmit={(e) => e.preventDefault()}>
               <Input type='text' placeholder='Email Adress'/>
               <Button className='_gold_btn'>Subscribe</Button>
           </Form>
        </Content>
    </Wrapper>
  )
}

export default NewsLetter

const Wrapper = styled.section`
background: var(--color-black);
padding: 60px 100px;
display: flex;
justify-content:center;
${mobile({padding: '40px 20px'})};
`

const Content = styled.div`
border: 1px solid var(--color-gold);
text-align: center;
padding: 50px 100px;
${mobile({padding: '30px 20px'})};
`

const Title = styled.h1`
color: var(--color-gold);
font-size: 60px;
margin: 20px 0;
${mobile({fontSize: '35px'})};
`

const Paragraph = styled.p`
color: var(--color-grey);
line-height: 1.7;
margin: 20px 0;
text-transform: capitalize;
font-family: var(--font-openSans);
font-size: 14px;
`

const Form = styled.form`
display: flex;
margin-top: 30px;
`

const Input = styled.input`
flex: 1;
padding: 10px;
height: 40px;
border: 1px solid var(--color-gold);
background: transparent;
margin-right: 10px;
border-radius: 4px;
color: var(--color-white);

:focus{
outline: none;
}
`

const Button = styled.button`
border-radius: 4px;
`


