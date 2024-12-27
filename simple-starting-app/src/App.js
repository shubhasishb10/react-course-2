import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button className="get-advice-button" onClick={getAdvice}>
        Get Advice
      </button>
      <Message count={count} />
    </div>
  );
}

export default App;

function Message(props) {
  return <p>You have read {props.count} advices</p>;
}
