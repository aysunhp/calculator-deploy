import React from "react";

const DifBtn = ({ first,setFirst, second,setSecond, result, setResult }) => {
  function handleDif() {
    setResult(Number(first) - Number(second));
  }
  return <button onClick={() => handleDif()}>Çıx</button>;
};

export default DifBtn;
