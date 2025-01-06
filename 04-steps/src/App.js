import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    setStep((s) => s - 1);
  };

  const handleNext = () => {
    setStep((s) => s + 1);
  };

  // const step = 1;
  return (
    <>
      <button
        className={`${isOpen ? "close" : "add"}`}
        onClick={() => setIsOpen((v) => !v)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              disabled={step === 1}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              disabled={step === 3}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
