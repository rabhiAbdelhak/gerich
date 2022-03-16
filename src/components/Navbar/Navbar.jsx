import React from "react";
import styled from "styled-components";
function Navbar() {
  return (
    <Wrapper>
      <Left>
        <Logo>
          <Icon src="assets/images/logo.png" alt="log" />
        </Logo>
      </Left>
      <Center>
        <Menu>
          <MenuItem>
            <LinkItem>Home</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Pages</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Contact Us</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Blog</LinkItem>
          </MenuItem>
          <MenuItem>
            <LinkItem>Landing</LinkItem>
          </MenuItem>
        </Menu>
      </Center>
      <Right>
          <Authetification>
              <LinkItem>Register</LinkItem>
               / 
              <LinkItem>Log in</LinkItem>
          </Authetification>
          <Separator></Separator>
          <Booktable>
              <LinkItem>Book Table</LinkItem>
          </Booktable>
      </Right>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
display: flex;
aign-items: center;
background: black;
max-height: 120px:
align-items:center;
justify-content: space-between;
padding: 20PX 50px;
`;

const Left = styled.div`
  flex: 1;
  
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  aign-items: center;
  
`;

const Logo = styled.div`
  width: 200px;
`;

const Icon = styled.img`
  max-width: 100%;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MenuItem = styled.li``;

const LinkItem = styled.a`
  display: block;
  padding: 10px;
  font-size: 0.7rem;
  text-align: center;
  position: relative;

  ::before {
      content: '';
      width: 0%;
      height: 2px;
      background: var(--main-gold);
      position: absolute;
      top:0;
      left:0;
      transition: var(--main-transition)
  }
  :hover{
      background: rgba(255, 255, 255, 0.3);
      color: var(--main-gold);
  }

  :hover::before{
      width:100%
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  color: white;
  
`;

const Authetification = styled.div`
display: flex;
align-items:center;

`

const Separator = styled.div`
height: 50%;
background: rgba(255, 255, 255, 0.1);
width: 2px;
margin: 0 20px;
`

const Booktable = styled.div`
`
