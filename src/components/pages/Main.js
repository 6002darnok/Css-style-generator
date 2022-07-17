import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

function Main({ children,isOpen ,setIsOpen }) {
    
  return (
    <MainContainer>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <ChildContainer>{children}</ChildContainer>
      
    </MainContainer> 
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
`;
const ChildContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Main;
