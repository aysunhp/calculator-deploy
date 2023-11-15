import React from "react";
import { PropTypes } from "prop-types";
import { useState } from "react";

const InputSecond = ({ setSecond }) => {
  function handleSecond(e) {
    setSecond(e.target.value);
  }
  return (
    <form action="">
      <input
        onChange={(e) => handleSecond(e)}
        type="number"
        name="input2"
        placeholder="Enter another number"
      />
    </form>
  );
};

// InputSecond.propTypes = {
//   second: PropTypes.number,
// };
export default InputSecond;
