import React from 'react'
import styled from 'styled-components';

//local imports
import SpecialHeading from '../SpecialiHeading/SpecialHeading'
import {images, data} from '../../Data';
import SingleAward from './SingleAward';
import {tablette, mobile} from '../../services/Responsive';

function Laurel() {
  return (
    <Wrapper className='_flex_center'>
        <Logo src={images.logo}/>
        <Awards>
          <SpecialHeading title='Awards And Recognition' alignement='left'/>
          <Title>Our Laurel</Title>
          <Boxes>
            {data.awards.map(award => {
              return <SingleAward {...award} />
            })}
          </Boxes>
        </Awards>
        <Image src = {images.laurels} alt='laurelimage'/>
    </Wrapper>
  )
}

export default Laurel

const Wrapper = styled.section`
padding: 50px 150px;
position: relative;
background-image: url('assets/images/bg.png');
${tablette({flexDirection:'column-reverse', padding :'50px'})};

`

const Logo = styled.img`
position: absolute;
inset: 20px;
width: 70px;
height: 70px;
${tablette({opacity: 0.3})}
`

const Awards = styled.div`
flex: 1;
margin-right: 30px;
display: flex;
flex-direction: column;
${mobile({alignItems:'center'})}
`

const Title =styled.h1`
color: var(--color-gold);
margin-bottom: 20px;
margin-top: 10px;
font-size: 35px;
`

const Boxes = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2%;
${mobile({flexDirection: 'column'})}
`

const Image = styled.img`
width: 300px;
${tablette({display: 'none'})}
`

