// ==============================
// 2. დღევანდელი ნასწავლი თემები
// ==============================

// useEffect:
// React Hook-ია, რომელსაც ვიყენებთ იმისთვის,
// რომ კომპონენტის render-ის შემდეგ რაიმე კოდი გაეშვას.

// მაგალითად:
// API request
// Timer
// document.title შეცვლა
// Event Listener დამატება



// Clean Up Function:
// useEffect-ში return ფუნქცია არის cleanup.
// იგი მუშაობს როცა კომპონენტი იშლება
// ან dependency შეიცვლება.

// ვიყენებთ:
// clearInterval()
// clearTimeout()
// removeEventListener()



// Dependency Array:
// useEffect-ის მეორე პარამეტრია array []

// [] => ერთხელ გაეშვება (mount დროს)

// [count] => გაეშვება როცა count შეიცვლება

// [count, text] => გაეშვება როცა რომელიმე შეიცვლება

// გარეშე => ყოველ render-ზე გაეშვება



// ===================================
// 3. Clean Up Function - 3 მაგალითი
// ===================================

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);


// მაგალითი 1 - setInterval cleanup
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer მუშაობს");
  }, 1000);

  return () => clearInterval(timer);
}, []);


// მაგალითი 2 - resize event cleanup
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);


// მაგალითი 3 - timeout cleanup
useEffect(() => {
  const timeout = setTimeout(() => {
    console.log("3 წამი გავიდა");
  }, 3000);

  return () => clearTimeout(timeout);
}, []);



// ===================================
// 4. Dependency Array - 3 მაგალითი
// ===================================

// მაგალითი 1 - ერთხელ
useEffect(() => {
  console.log("ერთხელ ჩაიტვირთა");
}, []);


// მაგალითი 2 - count შეიცვალა
useEffect(() => {
  console.log("count შეიცვალა");
}, [count]);


// მაგალითი 3 - ყოველ render-ზე
useEffect(() => {
  console.log("ყოველ render-ზე");
});



// ===================================
// 5. გაერთიანებული მაგალითები
// ===================================

// მაგალითი 1
useEffect(() => {
  document.title = count;

  return () => {
    console.log("ძველი title გაიწმინდა");
  };
}, [count]);


// მაგალითი 2
useEffect(() => {
  const timer = setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);


// მაგალითი 3
useEffect(() => {
  function clickMe() {
    console.log("Clicked");
  }

  window.addEventListener("click", clickMe);

  return () => window.removeEventListener("click", clickMe);
}, []);




return (
  <div>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
);
}

export default App;