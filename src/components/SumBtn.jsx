import React, { useState } from "react";

function SumBtn({ first,  second,  setResult }) {
  function handleSub() {
    setResult(Number(first) + Number(second));
  }
  return <button onClick={() => handleSub()}>Topla</button>;
}

export default SumBtn;
