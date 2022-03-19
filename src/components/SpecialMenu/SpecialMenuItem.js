import React from "react";
import styled from "styled-components";

//local Imports
import { miniMobile } from "../../services/Responsive";

function SpecialMenuItem({ title, price, tags }) {
  return (
    <Wrapper>
      <Info>
        <Title>{title}</Title>
        <Separator></Separator>
        <Price>{price}</Price>
      </Info>
      <Tags>{tags}</Tags>
    </Wrapper>
  );
}

export default SpecialMenuItem;

const Wrapper = styled.article`
  margin: 40px 0;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  ${miniMobile({ flexDirection: "column", alignItems: "center", gap: "10px" })}
`;

const Title = styled.h3`
  flex: 1;
  color: var(--color-gold);
  font-size: 20px;
  font-weight: 700;
`;

const Tags = styled.p`
  color: var(--color-grey);
  font-size: 13px;
  margin-top: 10px;
  font-family: var(--font-openSans);
  ${miniMobile({ textAlign: "center", width: "100%" })};
`;

const Separator = styled.div`
  width: 100px;
  height: 3px;
  margin: 0 30px;
  background: var(--color-gray);
`;
const Price = styled.p`
  color: var(--color-white);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 1.5rem;
`;
