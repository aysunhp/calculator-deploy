import "./App.css";
import { useState } from "react";
import InputFirst from "./components/InputFirst";
import InputSecond from "./components/InputSecond";
import SumBtn from "./components/SumBtn";
import DifBtn from "./components/DifBtn";
import MultiplyBtn from "./components/MultiplyBtn";
import DivisionBtn from "./components/DivisionBtn";
import Result from "./components/Result";
function App() {
  let [first, setFirst] = useState(0);
  let [second, setSecond] = useState(0);
  let [result, setResult] = useState(0);
  return (
    <>
      <h2>Calculator</h2>
      <InputFirst first={first} setFirst={setFirst} />
      <InputSecond first={first} second={second} setSecond={setSecond} />
      <SumBtn
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        result={result}
        setResult={setResult}
      />
      <DifBtn
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        result={result}
        setResult={setResult}
      />
      <MultiplyBtn
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        result={result}
        setResult={setResult}
      />
      <DivisionBtn
        first={first}
        setFirst={setFirst}
        second={second}
        setSecond={setSecond}
        result={result}
        setResult={setResult}
      />
      <Result result={result} />
    </>
  );
}

export default App;
