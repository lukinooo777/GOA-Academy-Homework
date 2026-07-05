// useContext არის React-ის Hook.
//
// მისი დახმარებით შეგვიძლია მონაცემების (მაგ: მომხმარებელი, თემა,
// ენა, ავტორიზაცია და ა.შ.) გაზიარება სხვადასხვა კომპონენტს შორის
// ისე, რომ props-ების გადაცემა ყოველ დონეზე აღარ დაგვჭირდეს.
//
// useContext გამოიყენება მაშინ, როდესაც ერთი და იგივე ინფორმაცია
// ბევრ კომპონენტს სჭირდება.
//
// useContext ძირითადად შედგება 3 ნაწილისგან:
//
// 1. createContext() - ვქმნით Context-ს.
// 2. Context.Provider - ვაწვდით მონაცემებს შვილ კომპონენტებს.
// 3. useContext() - ვიღებთ Provider-იდან გადაცემულ მონაცემებს.

// Props Drilling არის სიტუაცია, როდესაც ერთი მონაცემის გადასაცემად
// გვიწევს props-ის გადაცემა რამდენიმე შუალედურ კომპონენტში,
// მიუხედავად იმისა, რომ ამ კომპონენტებს ეს მონაცემი საერთოდ არ სჭირდებათ.
//
// მაგალითად:
//
// App -> ComponentA -> ComponentB -> ComponentC
//
// თუ user მხოლოდ ComponentC-ს სჭირდება,
// მაინც მოგვიწევს მისი გადაცემა A-სა და B-ს გავლით.
//
// ამის თავიდან ასარიდებლად ვიყენებთ Context API-ს (useContext),
// რადგან მონაცემს პირდაპირ იმ კომპონენტში ვიღებთ,
// რომელსაც ის რეალურად სჭირდება.

// React-დან ვაიმპორტებთ createContext და useState
import { createContext, useState } from "react";

// ვქმნით ახალ Context-ს
export const UserContext = createContext();

import Home from "./Home";

function App() {

  // ვინახავთ მომხმარებლის სახელს
  const [user] = useState("Luka");

  return (

    // Provider-ით ვაწვდით user-ს ყველა შვილ კომპონენტს
    <UserContext.Provider value={user}>

      {/* შვილ კომპონენტი */}
      <Home />

    </UserContext.Provider>

  );
}

export default App;