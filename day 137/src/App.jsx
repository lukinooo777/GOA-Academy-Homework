// 1. useEffect რა არის?

// useEffect არის React Hook
// რომელსაც ვიყენებთ კომპონენტის ჩატვირთვის შემდეგ კოდის გასაშვებად.

// მაგალითად:
// API-დან ინფორმაციის წამოღება
// ტაიმერის გაშვება
// DOM-ზე ცვლილება
// Event Listener დამატება



// 2. როდის ვიყენებთ useEffect?

// useEffect ვიყენებთ როცა გვინდა:
// 1. კომპონენტის ჩატვირთვისას კოდის გაშვება
// 2. state შეცვლისას რაიმეს შესრულება
// 3. props შეცვლისას მოქმედება
// 4. API request გაგზავნა
// 5. cleanup ფუნქციის გამოყენება



// 3. დადებითი და უარყოფითი თვისებები

// დადებითი:
// ✔ ავტომატურად მუშაობს render-ის შემდეგ
// ✔ API-სთვის ძალიან კარგია
// ✔ Timer / EventListener მარტივად კეთდება
// ✔ Dependency array-ით კონტროლი შეგვიძლია

// უარყოფითი:
// ✘ თუ არასწორად გამოიყენე შეიძლება loop შევიდეს
// ✘ ბევრმა useEffect-მა კოდი არიოს
// ✘ Cleanup თუ დაგავიწყდა memory leak შეიძლება



// 5 დავალება useEffect მაგალითებზე


import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 1. კომპონენტის ჩატვირთვისას
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  // 2. count შეიცვალა
  useEffect(() => {
    console.log("Count შეიცვალა");
  }, [count]);

  // 3. text შეიცვალა
  useEffect(() => {
    document.title = text;
  }, [text]);

  // 4. timer
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer მუშაობს");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 5. ორივე შეიცვალა
  useEffect(() => {
    console.log("Count ან Text შეიცვალა");
  }, [count, text]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>+</button>

      <input
        type="text"
        placeholder="დაწერე რამე"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;