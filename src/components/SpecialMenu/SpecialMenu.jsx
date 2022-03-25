import React from "react";
import styled from "styled-components";

//local imports
import { images , data} from "../../Data/index";
import SpecialHeading from "../SpecialiHeading/SpecialHeading";
import SpecialMenuItem from "./SpecialMenuItem";
import {tablette, mobile} from '../../services/Responsive';

function SpecialMenu() {
  return (
    <Wrapper>
      <SpecialHeading title="Menu that fits your Palette" alignement="center" />
      <Title>Today's Special</Title>
      <Content className="_flex_center">
        <Menu>
          <MenuTitle>Wine And Beer</MenuTitle>
          {data.wines.map((wine, index) => {
            return <SpecialMenuItem key = {index} {...wine}/>
          })}
        </Menu>
        <Image src={images.menu} />
        <Menu>
        <MenuTitle>Cocktails</MenuTitle>
        {data.cocktails.map((cocktail, index) => {
            return <SpecialMenuItem key = {index} {...cocktail}/>
          })}
        </Menu>
      </Content>
      <Button className='_gold_btn'>View More</Button>
    </Wrapper>
  );
}

export default SpecialMenu;

const Wrapper = styled.section`
  padding: 100px 50px;
  background: var(--color-black);
  font-size: 30px;
`;

const Content = styled.div`
  margin-top: 50px;
  ${tablette({flexDirection:'column',})}
`;

const Title = styled.h1`
  color: var(--color-gold);
  text-align: center;
  margin: 20px 0;
  
`;

const Menu = styled.div`
flex: 1;
${tablette({width: '100%'})}`;

const MenuTitle = styled.h1`
color:var(--color-white);
text-align: center;
`

const Image = styled.img`
  flex: 1;
  max-width: 350px;
  margin: 0 40px;
  ${tablette({margin:'40px 0',})}
  ${mobile({maxWidth: '95%'})}
`;

const Button = styled.button`
margin: 40px auto;
display: block;
width: 120px;
`
