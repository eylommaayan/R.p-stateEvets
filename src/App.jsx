import React, { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div className="steps bg-gray-100 rounded-lg p-8 w-full max-w-md mx-auto mt-12">
      <div className="numbers flex justify-between mb-8">
        <div className={`number ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`number ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`number ${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message text-center text-xl font-bold">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons flex justify-between mt-8">
        <button
          className="bg-purple-700 text-white py-2 px-4 rounded-full flex items-center"
          onClick={handlePrevious}
        >
          <span>↩️</span>קודם
        </button>
        <button
          className="bg-purple-700 text-white py-2 px-4 rounded-full flex items-center"
          onClick={handleNext}
        >
          הבא<span>↪️</span>
        </button>
      </div>
    </div>
  );
}
