import { useEffect, useState } from "react";
import moment from "moment";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  // month: "short",
  // weekday: "short",
  // day: "2-digit",
  // year: "numeric",
});

function App() {
  const [incrementStep, setIncrementStep] = useState(1);
  const [count, setCount] = useState(0);

  const handleCountAdd = () => {
    setCount((c) => c + incrementStep);
  };

  const handleCountRemove = () => {
    setCount((c) => c - incrementStep);
  };

  const handleIncrementStepIncrease = () => {
    setIncrementStep((i) => i + 1);
  };

  const handleIncrementStepDecrease = () => {
    setIncrementStep((i) => i - 1);
  };

  // useEffect(() => {
  let mom = moment();
  mom.add(count, "days");
  // }, [count]);

  // const dayOfWeek = date.getDay();
  // const day = date.getDate();
  // const month = date.getMonth();
  // const year = date.getFullYear();

  return (
    <div className="container">
      <div>
        <button
          className="decrease-button"
          disabled={incrementStep === 1}
          onClick={handleIncrementStepDecrease}
        >
          -
        </button>
        Step: {incrementStep}
        <button
          className="increase-button"
          onClick={handleIncrementStepIncrease}
        >
          +
        </button>
      </div>
      <div>
        <button className="decrease-button" onClick={handleCountRemove}>
          -
        </button>
        Count: {count}
        <button className="increase-button" onClick={handleCountAdd}>
          +
        </button>
      </div>
      <div>
        <h3>{`${
          count !== 0
            ? `${Math.abs(count)} days ${count < 0 ? "ago" : ""} from`
            : ""
        } ${count === 0 ? "T" : "t"}oday ${
          count < 0 ? "was" : "is"
        } ${dateTimeFormat.format(mom)}`}</h3>
      </div>
    </div>
  );
}

export default App;
