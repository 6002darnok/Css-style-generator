import React from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { motion } from "framer-motion";

function ColorPicker({ color, onChangeComplete }) {
  return (
    <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
      <SketchPicker color={color} onChangeComplete={onChangeComplete} />
    </Box>
  );
}
const Box = styled(motion.div)`
    position: fixed;
    top: 50%;
    right: 50%;
`
export default ColorPicker;
