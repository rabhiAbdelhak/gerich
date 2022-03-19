import React from 'react'
import styled from 'styled-components';

//local imports
import {images} from '../../Data'
import {mobile} from '../../services/Responsive'

function SpecialHeading({alignement, title, right}) {
  return (
    <Wrapper alignement={alignement}>
        <Title>{title}</Title>
        <Icon src={images.spoon}/>
    </Wrapper>
  )
}

export default SpecialHeading

const Wrapper = styled.div`
text-align: ${props => props.alignement};
${mobile({textAlign: 'center'})}
`

const Title = styled.h1`
color: white;
margin: 0;
text-transform: capitalize;
letter-spacing: 2px;
`

const Icon = styled.img`
margin: 0;
`