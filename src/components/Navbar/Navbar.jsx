import React, { useState } from "react";
import styled from "styled-components";
import {FaBars} from 'react-icons/fa'


import {tablette, mobile} from '../../services/Responsive';
import SideBar from "../SideBare/SideBar";


function Navbar() {
  const [showSidebar , setShowSidebar] = useState(false);
  return (
    <Wrapper>
        <Logo>
          <Icon src="assets/images/gericht.png" alt="log" />
        </Logo>
        <Menu className = '_flex_center'>
          <MenuItem>
            <LinkItem>Home</LinkItem>
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
        <Authetification>
              <LinkItem>Register</LinkItem>
               / 
              <LinkItem>Log in</LinkItem>
              <Separator></Separator>
              <LinkItem>Book Table</LinkItem>
        </Authetification>
        <Actions>
           <ShowMenuBtn onClick={() => setShowSidebar(true)}>
                <FaBars/>
           </ShowMenuBtn>
        </Actions>
        <SideBar show = {showSidebar} close = {() => {setShowSidebar(false)}}/>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
display: flex;
aign-items: center;
background: var(--color-black);
max-height: 120px:
justify-content: space-between;
padding: 20PX 50px;
${mobile({padding: '10px 15px'})}
`;



const Logo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  ${mobile({width: '70px'})}
`;

const Icon = styled.img`
  max-width: 80%;
`;




const Menu = styled.ul`
  flex: 1;
  ${tablette({display: 'none'})}
`;

const MenuItem = styled.li``;

const LinkItem = styled.a`
  display: block;
  padding: 10px;
  font-size: 0.7rem;
  text-align: center;
  position: relative;
  color: var(--color-crimson);
  ${mobile({padding: '5px'})}
  

  ::before {
      content: '';
      width: 0%;
      height: 2px;
      background: var(--color-gold);
      position: absolute;
      top:0;
      left:0;
      transition: var(--main-transition)
  }
  :hover{
      background: rgba(255, 255, 255, 0.3);
      color: var(--color-gold);
  }

  :hover::before{
      width:100%
  }
`;

const Authetification = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content: flex-end;
${tablette({justifyContent: 'center', flex: 3})}

`

const Separator = styled.div`
height: 30px;
background: rgba(255, 255, 255, 0.2);
width: 2px;
margin: 0 20px;
${mobile({margin: '0px 5px'})}
`
const Actions = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
display: none;
${tablette({display: 'flex'})}
`
const ShowMenuBtn = styled.button`
background: transparent;
color: white;
border: none;
font-size: 22px;

`