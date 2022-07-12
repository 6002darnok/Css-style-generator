import React from "react";
import { Range} from "react-range";


const RangeInput = ({value = [0],setValue, min = -100}) => {
  return (
    <Range
    step={1}
    min={min}
    max={100}
    values={value}
    onChange={setValue}
    renderTrack={({ props, children }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: '6px',
          width: '100%',
          backgroundColor: '#ccc'
        }}
      >
        {children}
      </div>
    )}
    renderThumb={({ props }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: '15px',
          width: '15px',
          backgroundColor: '#08aeea',
          borderRadius: '50%',
        }}
      />
    )}
  />
  );
};
export default RangeInput
