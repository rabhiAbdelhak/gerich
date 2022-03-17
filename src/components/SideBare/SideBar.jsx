import React from 'react'
import styled from 'styled-components';
import {largeScreen} from '../../services/Responsive';

function SideBar({show, close}) {
  return (
    <Wrapper show = {show} className='_flex_center'>
      <CloseBtn className='_flex_center' onClick={close}>
          X
      </CloseBtn>
      <Menu className = '_flex_center'>
          <MenuItem>
            <LinkItem onClick={close} href='/'>Home</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Pages</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Contact</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Blog</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Landing</LinkItem>
          </MenuItem>
        </Menu>
    </Wrapper>
  )
}

export default SideBar

const Wrapper = styled.div`
position: fixed;
top:0;
left:0;
width: 100vw;
height: 100vh;
background: var(--color-black);
transition: var(--main-transition);
z-index: 100;
transform: ${props => props.show ? 'scale(1)' : 'scale(0)'};
${largeScreen({transform: 'scale(0)'})};

`

const CloseBtn= styled.button`
position: absolute;
top: 10px;
right: 10px;
color: var(--color-gold);


`

const Menu = styled.ul`
color: var(--color-gold);
flex-direction: column;
font-family: var(--font-cormorant);
`
const MenuItem = styled.li`

`
const LinkItem = styled.a`
display: block;
padding: 15px;
font-size: 1.5rem;

:hover{
    color: var(--color-gray);
}
`