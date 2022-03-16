import React from 'react'
import styled from 'styled-components';
function Navbar() {
  return (
    <Wrapper>
        <Left>
           <Logo>
               <Icon src='assets/images/logo.png' alt='log'/>
           </Logo>
        </Left>
        <Center>
            <Menu>
                <MenuItem>
                <LinkItem>
                          Home
                     </LinkItem>
                </MenuItem>
                <MenuItem>
                    <LinkItem>
                        Pages
                     </LinkItem>
                </MenuItem>
                <MenuItem>
                <LinkItem>
                         Contact Us
                     </LinkItem>
                </MenuItem>
                <MenuItem>
                <LinkItem>
                         Blog
                     </LinkItem>
                </MenuItem>
                <MenuItem>
                <LinkItem>
                         Landing
                     </LinkItem>
                </MenuItem>
                     
                     
                     
                     
                     
                
            </Menu>
        </Center>
        <Right>

        </Right>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
background: black;
max-height: 120px:
display: flex;
justify-content: space-between;
padding: 20PX 50px;
`

const Left = styled.div`
flex:1;
`
const Center = styled.div`
flex:1;
align-items: center;
`
const Right = styled.div`
flex:1;
`
const Logo = styled.div`
width: 200px
`

const Icon = styled.img`
max-width: 100%`;

const Menu = styled.ul`
display: flex;
color: white;
`

const MenuItem = styled.li``

const LinkItem = styled.a`
display: block;
`
