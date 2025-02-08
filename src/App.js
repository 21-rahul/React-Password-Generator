import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  LOWERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
  UPPERCASE_LETTERS,
} from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLower] = useState(false);
  let [numbercase, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLength, setpasswordLength] = useState(15);
  let [fPass, setPass] = useState("");

  let createPassword = () => {
    let charSet = "";
    let finalPass = "";
    if (uppercase || lowercase || numbercase || symbols) {
      if (uppercase) charSet += UPPERCASE_LETTERS;
      if (lowercase) charSet += LOWERCASE_LETTERS;
      if (numbercase) charSet += NUMBERS;
      if (symbols) charSet += SYMBOLS;
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setPass(finalPass);
    } else {
      toast.error("Please select at least one symbol");
    }
  };

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass);
  }

  return (
    <>
      <div className="passwordBox">
        <ToastContainer />
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" readOnly value={fPass} />
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordLength}
            onChange={(event) => setpasswordLength(event.target.value)}
          />
        </div>

        <div className="passLength">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLower(!lowercase)}
          />
        </div>

        <div className="passLength">
          <label>Include numbers</label>
          <input
            type="checkbox"
            checked={numbercase}
            onChange={() => setNumber(!numbercase)}
          />
        </div>

        <div className="passLength">
          <label>Include symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button onClick={() => createPassword()} className="btn">
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
