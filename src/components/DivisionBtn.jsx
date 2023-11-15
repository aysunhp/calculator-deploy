import React from "react";

const DivisionBtn = ({
  first,
  setFirst,
  second,
  setSecond,
  result,
  setResult,
}) => {
  function handleDivision() {
    setResult(Number(first) / Number(second));
  }
  return <button onClick={() => handleDivision()}>Böl</button>;
};

export default DivisionBtn;
