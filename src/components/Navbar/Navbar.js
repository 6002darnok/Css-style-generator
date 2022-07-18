import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

function Navbar({ isOpen ,setIsOpen}) {

  return (
    <Nav isOpen={isOpen}>
      <BurgerBox>
        <Burger isOpen={isOpen} props={isOpen}/>
      </BurgerBox>
      <NavELements>
        <List> 
          <ListItem>
            <StyledLink to="/Css-style-generator/" onClick={setIsOpen}>Home</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/Css-style-generator/boxShadow" onClick={setIsOpen}>Box shadow generator</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/Css-style-generator/boxGradient" onClick={setIsOpen}>Box gradient generator</StyledLink>
          </ListItem>
        </List>
      </NavELements>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 400px;
  height: 100%;
  background-color: #f5f5f5;
  /* transform: translateX(-80%); */
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(80%)")};
  transition: 0.3s ease-in-out;
  z-index: 100;
  position: fixed;
  &:hover {
    transform: translateX(0);
  }
  -webkit-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const BurgerBox = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavELements = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;
const List = styled.ul`
  width: 80%;
  height: 100%;
  list-style: none;
`;
const ListItem = styled.li`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
`

export default Navbar;
