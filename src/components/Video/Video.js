import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import {FaPlay, FaPause} from 'react-icons/fa';

//local imports
import video from '../../assets/meal.mp4';

function Video() {
    const [play, setPlay] = useState(false);
    const videoRef = useRef();
  
    function handleVideo(){
          setPlay(prevPlay => !prevPlay);
    }

    useEffect(() => {
       if(play){
           videoRef.current.play();
       }else{
           videoRef.current.pause();
       }
    }, [play])
  return (
    <Wrapper>
        <VideoPlayer 
                src={video} 
                alt='video' 
                ref= {videoRef}
                loop
                controls = {false}
                type='video/mp4'
        />
        <Overlay className='_flex_center'>
            <Button className='_flex_center' onClick={handleVideo}>
                {play ? <FaPause/> : <FaPlay/>}
            </Button>
        </Overlay>
    </Wrapper>
  )
}

export default Video

const Wrapper = styled.div`
height: 600px;
width: 100%;
position: relative;
background: var(--color-black);

:hover > div{
    display: flex;
}
`

const VideoPlayer = styled.video`
width: 100%;
height: 100%;
`

const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
top:0;
left: 0;
background: rgba(0, 0, 0, 0.3);
display: none;
`

const Button = styled.button`
width: 100px;
height: 100px;
border-radius: 50%;
color: var(--color-white);
font-size: 20px;
border: 1px solid var(--color-white);
`