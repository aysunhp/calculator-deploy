import React from "react";

const MultiplyBtn = ({ first,setFirst, second,setSecond, result, setResult }) => {
  function handleMultiply() {
    setResult(Number(first) * Number(second));
  }
  return <button onClick={() => handleMultiply()}>Vur</button>;
};

export default MultiplyBtn;
