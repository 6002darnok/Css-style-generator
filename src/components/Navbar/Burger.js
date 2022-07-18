import React from "react";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2.5rem;
  height: 2rem;
  z-index: 121;
  margin: 20px;
  div{
    width: inherit;
    height: 0.25rem;
    background-color: ${(props) => (props.isOpen ? "black" : "black")};
    border-radius: 10px;
    margin: 5px;
    transition: transform .2s, margin-top .2s, margin-bottom .2s;
  }
  &:hover{
    .one{
      transform:  rotate(-45deg);
      margin-top: 14px;
      margin-bottom: -9px;
    }
    .two{
      transform:  rotate(45deg);
    }
    .three{
      transform:  rotate(-45deg);
      margin-top: -9px;
      margin-bottom: 14px;
    }
  }
  
`;
function Burger({isOpen}){

  return (
    <StyledBurger isOpen={isOpen}>
      <div className="one"/>
      <div className="two"/>
      <div className="three"/>
    </StyledBurger>
  );
};

export default Burger;
