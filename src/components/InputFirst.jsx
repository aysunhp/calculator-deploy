import React from "react";


const InputFirst = ({ setFirst }) => {
  function handleFirst(e) {
    setFirst(e.target.value);
  }
  return (
    <form action="">
      <input
        onChange={(e) => handleFirst(e)}
        type="number"
        name="input1"
        placeholder="Enter number"
      />
    </form>
  );
};


export default InputFirst;
