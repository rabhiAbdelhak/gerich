import React from 'react'
import styled from 'styled-components';

//local imports 
import {mobile} from '../../services/Responsive';

function SingleAward({imgUrl, title, subtitle}) {
  return (
    <Wrapper>
        <Image src={imgUrl} alt='laurel'/>
        <Info>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Info>
    </Wrapper>
  )
}

export default SingleAward

const Wrapper = styled.article`
display: flex;
align-items: center;
width: 47%;
margin-bottom: 20px;
${mobile({flexDirection:'column',width: '100%'})}
`

const Image = styled.img`
width: 50px;
height: 50px;
margin-right: 20px;
${mobile({marginBottom: '20px', marginRight: 0})}
`
const Info = styled.div`
flex: 1;
`
const Title = styled.p`
color: var(--color-gold);
margin-bottom: 7px;
`

const SubTitle = styled.p`
line-height: 1.7;
color: var(--color-gray);
font-family: var(--font-openSans);
font-size: 13px;
`