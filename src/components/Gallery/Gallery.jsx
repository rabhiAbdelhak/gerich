import React, {useRef, useState } from 'react';
import styled from 'styled-components';
import {FaInstagram} from 'react-icons/fa';

//local imports
import {images} from '../../Data';

import SpecialHeading from '../SpecialiHeading/SpecialHeading';
import {tablette, mobile, miniMobile} from '../../services/Responsive';


function Gallery() {
  const sliderRef = useRef();
  const [indexImg , setIndexImg] = useState(0);
  
  function checkIndex(number){
      console.log(number);
      if(number > images.gallery.length) return 0;
      if(number < 0) return images.gallery.length - 1;
      return number;
  }
  return (
    <Wrapper>
        <Intro>
            <SpecialHeading title='Instagram' />
            <Title>Photo Gallery</Title>
            <Paragraph>
                You are visiting the web site that I developed standing
                on the beutiful figma file in this link ! 
            </Paragraph>
            <Button className='_gold_btn'>Show More</Button>
        </Intro>
        <GalleryWrapper>
        <MoveButton left onClick={() => setIndexImg(checkIndex(indexImg - 1))}>Prev</MoveButton>
        <Images  ref={sliderRef}>
              {images.gallery.map((img, index) => {
                  return(
                    <ImageContainer key={index}>
                       <Image  src = {img} alt='gallery'/>
                       <Overlay className='_flex_center overlay'>
                          <FaInstagram className='instagram'/>
                       </Overlay>
                    </ImageContainer>
                  )
              })}
        </Images>
        <MoveButton right onClick={() => setIndexImg(checkIndex(indexImg + 1))}>Next</MoveButton>
        </GalleryWrapper>
    </Wrapper>
  )
}

export default Gallery

const Wrapper = styled.section`
padding: 50px 20px;
display: flex;
align-items: center;
background: var(--color-black);
height: 420px;
${tablette({flexDirection:'column', height: 'auto'})};
`

const Intro = styled.div`
padding: 15px;
flex:1;
${tablette({textAlign: 'center'})};
`

const Title = styled.h1`
color: var(--color-gold);
font-size: 35px;
margin-bottom: 20px;
margin-top: 10px;

`

const Paragraph = styled.p`
color: var(--color-gray);
margin: 20px 0;
line-height: 1.7;
`

const Button = styled.button``

const GalleryWrapper = styled.div`
flex: 3;
`

const Images = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
${tablette({marginTop: '30px'})};
${mobile({gridTemplateColumns: 'repeat(2, 1fr)'})};
${miniMobile({gridTemplateColumns: '100%'})};
`

const ImageContainer = styled.div`
height: 300px;
position: relative;



:hover > .overlay{
   transform: scale(1);
}

`
const Overlay = styled.div`
width: 100%;
height: 100%;
background: rgb(0 0 0 / 0.7);
position: absolute;
top:0;
left:0;
transform: scale(0);

.instagram{
    color: var(--color-gold);
    font-size: 40px;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
`

const MoveButton= styled.button`
color: white;
position: absolute;
width: 50px;
height: 50px;
border-radius: 50%;
top: 50%;
transform: translateY(-50%);
background var(--color-black);
z-index: 1;
display:none;
${props => props.right ? 'right: 10px' : 'left: 10px'};
`