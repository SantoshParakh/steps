import React,{useState} from "react"
import './App.css'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "And become Rich 🤑",
];

export default function App() {
  const [stepsInc, setStepsInc] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  const handleIncClick = () => {
    if (stepsInc >= 4) return null;
    setStepsInc(stepsInc + 1);
  };

  const handleDecClick = () => {
    if (stepsInc <= 1) return null;
    setStepsInc(stepsInc - 1);
  };

  return (
    <>
    <button className="close" onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'x': '≡'}</button>
    { isOpen && (
      <div className="steps">
        <div className="numbers ">
          <div className={`${stepsInc >= 1 ? "active" : ""} `}>1</div>
          <div className={`${stepsInc >= 2 ? "active" : ""}`}>2</div>
          <div className={`${stepsInc >= 3 ? "active" : ""}`}>3</div>
          <div className={`${stepsInc >= 4 ? "active" : ""}`}>4</div>
        </div>
        <p className="message">
          Step {stepsInc} {messages[stepsInc - 1]}
        </p>
        <div className="buttons">
          <button
            onClick={handleDecClick}
            style={{
              backgroundColor: "#7950f2",
              color: "#fff",
              pointerEvents: stepsInc === 1 ? "none" : "auto",
              opacity: stepsInc === 1 ? 0.5 : 1,
            }}
            disabled={stepsInc === 1}
          >
            Previous
          </button>
          <button
            onClick={handleIncClick}
            style={{
              backgroundColor: "#7950f2",
              color: "#fff",
              pointerEvents: stepsInc === 4 ? "none" : "auto",
              opacity: stepsInc === 4 ? 0.5 : 1,
            }}
            disabled={stepsInc === 4}
          >
            Next
          </button>
        </div>
      </div>
    )
      }
    </>
  );
}
