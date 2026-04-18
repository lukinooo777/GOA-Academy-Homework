// =======================================
// 2. რა არის Container Component
// =======================================

// Container Component არის კომპონენტი,
// რომელიც აკონტროლებს ლოგიკას.

// მისი საქმეა:
// state შენახვა
// API request
// function-ების მართვა
// მონაცემების გადაცემა შვილ კომპონენტებზე

// ანუ მუშაობს "ტვინივით"



// =======================================
// 3. რა არის Presentational Component
// =======================================

// Presentational Component არის კომპონენტი,
// რომელიც მხოლოდ აჩვენებს დიზაინს/UI-ს.

// მისი საქმეა:
// ტექსტის ჩვენება
// button-ის ჩვენება
// card-ის ჩვენება
// style-ის დამატება

// მას ჩვეულებრივ props მიეწოდება

// ანუ მუშაობს "გარეგნობად"



// =======================================
// 4. განსხვავება
// =======================================

// Container Component:
// შეიცავს logic + state

// Presentational Component:
// შეიცავს მხოლოდ UI

// Container აგზავნის მონაცემს
// Presentational აჩვენებს მონაცემს



// =======================================
// 5. დადებითი და უარყოფითი მხარეები
// =======================================

// დადებითი:
// ✔ კოდი სუფთა ხდება
// ✔ მარტივად იშლება ნაწილებად
// ✔ reuse ადვილია
// ✔ დიდი პროექტისთვის კარგია

// უარყოფითი:
// ✘ პატარა პროექტში ზედმეტია
// ✘ ფაილები ბევრდება
// ✘ დამწყებისთვის შეიძლება აირიოს



import { useState } from "react";


// =======================================
// მაგალითი 1
// =======================================

function CounterView({ count }) {
  return <h1>{count}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterView count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}



// =======================================
// მაგალითი 2
// =======================================

function UserCard({ name }) {
  return <h2>{name}</h2>;
}

function App2() {
  const user = "Luka";

  return <UserCard name={user} />;
}



// =======================================
// მაგალითი 3
// =======================================

function ButtonView({ text }) {
  return <button>{text}</button>;
}

function App3() {
  return <ButtonView text="Click Me" />;
}



// =======================================
// მაგალითი 4
// =======================================

function Product({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}₾</p>
    </div>
  );
}

function App4() {
  return <Product title="Phone" price={1200} />;
}



// =======================================
// მაგალითი 5
// =======================================

function Message({ text }) {
  return <p>{text}</p>;
}

function App5() {
  const msg = "Hello React";

  return <Message text={msg} />;
}

export default App;