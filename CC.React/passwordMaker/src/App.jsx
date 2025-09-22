import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (characters) str += "!@#$%^&*()_+?/";
    if (numbers) str += "1234567890";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, characters, numbers, setPassword]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => passGen(), [length, characters, numbers, passGen]);

  return (
    <>
      <div className="mt-30">
        <h1 className="text-4xl text-amber-500 mb-4">Password Generator</h1>
        <div className="flex justify-center">
          <div className="bg-cyan-900 w-170 rounded-2xl">
            <div className="text-3xl py-2 flex justify-center m-2">
              <input
                className="bg-white pl-1 rounded-l-lg"
                type="text"
                value={password}
                placeholder="hello"
                ref={passwordRef}
              ></input>
              <button
                className="bg-orange-400 text-lg px-2 rounded-r-lg cursor-pointer hover:bg-amber-800 hover:animate-pulse"
                onClick={copyPassword}
              >
                Copy
              </button>
            </div>
            <div className="flex justify-between px-5">
              <div className="flex align-baseline gap-3">
                <input
                  className=""
                  type="range"
                  min={8}
                  max={100}
                  onChange={(e) => setLength(e.target.value)}
                ></input>
                <label>Length:{length}</label>
              </div>
              <div className="flex align-baseline gap-2">
                <input
                  type="checkbox"
                  defaultChecked={numbers}
                  onChange={() => setNumbers((prev) => !prev)}
                ></input>
                <label>Numbers</label>
              </div>
              <div className="flex align-baseline gap-2">
                <input
                  type="checkbox"
                  defaultChecked={characters}
                  onChange={() => setCharacters((prev) => !prev)}
                ></input>
                <label>Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
