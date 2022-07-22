import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import RotationRangeInput from "../Atoms/BoxAtoms/RotationRangeInput";
import ColorPicker from "../Atoms/BoxAtoms/ColorPicker";
import { CopyOutline } from "react-ionicons";

function BoxGradient({ isOpen ,setIsOpen}) {
  const [rotation, setRotation] = useState([90]);
  const [inputValue, setInputValue] = useState();
  const [radial, setRadial] = useState(false);
  const [colorLeft, setColorLeft] = useState({ hex: "#020024" });
  const [colorRight, setColorRight] = useState({ hex: "#00d4ff" });
  const [colorLeftOpen, setColorLeftOpen] = useState(false);
  const [colorRightOpen, setColorRightOpen] = useState(false);
  const [leftColorOpend, setLeftColorOpend] = useState(true);
  const [rightColorOpend, setRightColorOpend] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const settingOffColor = () =>{
    if(rightColorOpend && leftColorOpend) return;
    if(isHovering) return;
    setColorLeftOpen(false)
    setColorRightOpen(false)
    setLeftColorOpend(true)
    setRightColorOpend(true)
  }

  const oppeningLeftColor = () =>{
    setColorLeftOpen(!colorLeftOpen)
    setLeftColorOpend(false)
  }

  const oppeningRightColor = () =>{
    setColorRightOpen(!colorRightOpen)
    setRightColorOpend(false)
  }

  const rotationChangeValue = (event) =>{
    const {value} = event.target;
    const val = parseInt(value, 10)
    console.log(value);
    setRotation(value);
  }

  return (
    <Box onClick={settingOffColor}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Container>
          <OperationBox>
            {!radial && (
              <InputBox>
                <LabelBox>
                  <Label>Rotation</Label>
                  <InputNumber 
                    value={rotation}
                    onChange={rotationChangeValue}
                  ></InputNumber>
                </LabelBox>
                <RotationRangeInput
                  value={rotation}
                  setValue={(value) => setRotation(value)}
                />
              </InputBox>
            )}
            <InputBox>
              <LabelBox>
                <Label>Radial</Label>
                <p>{radial}</p>
                <CheckBoxWrapper>
                  <CheckBox
                    id="checkbox"
                    type="checkbox"
                    value={radial}
                    onChange={() => setRadial(!radial)}
                  />
                  <CheckBoxLabel htmlFor="checkbox" />
                </CheckBoxWrapper>
              </LabelBox>
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>First Color</Label>
                <p>{radial}</p>
                <ColorBox
                  color={colorLeft.hex}
                  onClick={oppeningLeftColor}

                />
                {colorLeftOpen && (
  
                  <ColorPicker
                    color={colorLeft}
                    onChangeComplete={(color) => setColorLeft(color)}
                    
                  />
                )}
              </LabelBox>
            </InputBox>
            <InputBox>
              <LabelBox>
                <Label>Second Color</Label>
                <p>{radial}</p>
                <ColorBox
                  color={colorRight.hex}
                  onClick={oppeningRightColor}
                />
                {colorRightOpen && (

                  <ColorPicker
                    color={colorRight}
                    onChangeComplete={(color) => setColorRight(color)}
                    
                  />
                )}
              </LabelBox>
            </InputBox>
          </OperationBox>
          <OperationBox
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {<OutputBox
              rotation={rotation}
              radial={radial}
              colorLeft={colorLeft.hex}
              colorRight={colorRight.hex}
            />}
            <CodeBox>
              <IconBox>
                <CopyOutline
                  color={"#fff"}
                  title={"Copy"}
                  height="25px"
                  width="25px"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `background: ${radial ? "radial-gradient" : "linear-gradient"}
                      ${radial ? "(circle, " : "("+rotation + "deg, "}
                      ${colorLeft.hex + " 0%"}, ${colorRight.hex + " 100%)"};
                    `
                    );
                  }}
                />
              </IconBox>
              <StyledCode>
                background: {radial ? "radial-gradient" : "linear-gradient"}
                {radial ? "(circle, " : "("+rotation + "deg, "}
                {colorLeft.hex + " 0%"}, {colorRight.hex + " 100%)"};
              </StyledCode>
              <StyledCode> </StyledCode>
            </CodeBox>
          </OperationBox>
        </Container>
      </motion.div>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #08aeea;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const OperationBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f5f5f5;
  -webkit-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 14px -3px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.div`
  flex: 1;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #474747;
  &:last-child {
    border-bottom: none;
  }
`;
const LabelBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
`;
const Label = styled.label``;

const CheckBoxWrapper = styled.div`
  position: relative;
`;

const InputNumber = styled.input.attrs({ type: 'number' })`
  font-size: 18px;
  padding: 10px;
  max-height: 20px;
  max-width: 65px;
  border-style: solid;
  border-color: rgba(0,0,0,0.1);
  border-radius: 3px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #50e3c2;
}
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #08aeea;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  background: ${(props) => props.color || "#000000"};
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
`;

const CodeBox = styled.div`
  width: 90%;
  height: 200px;
  background-color: #292929;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const StyledCode = styled.p`
  color: white;
  font-size: 18px;
`;
const IconBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 20px;
`;

const OutputBox = styled.div`
  width: 500px;
  height: 200px;
  background: ${(props) => props.radial ? "radial-gradient" : "linear-gradient"}(
  ${(props) => props.radial ? "circle" : (props) => props.rotation + "deg"},
  ${(props) => props.colorLeft} 0%, ${(props) => props.colorRight} 100%);
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
`;

export default BoxGradient
;