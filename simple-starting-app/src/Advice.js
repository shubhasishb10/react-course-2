import randomColor from "randomcolor";
import { useState, useEffect } from "react";

function Advice() {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getAdvice() {
    setIsLoading(true);
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setIsLoading(false);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h3>Get some advices today</h3>
      {isLoading && <h1>...Loading...</h1>}
      {!isLoading && (
        <h1
          style={{
            color: randomColor({
              luminosity: "dark",
            }),
          }}
        >
          {advice}
        </h1>
      )}
      <button
        disabled={isLoading}
        className="get-advice-button"
        onClick={getAdvice}
      >
        Get New Advice
      </button>
      <h4 style={{ opacity: 0.1 }}>
        <i style={{ marginTop: "10px" }}>
          Using <b>api.adviceslip.com</b> to fetch the advices
        </i>
      </h4>
    </div>
  );
}

export default Advice;
