import { useState } from "react";

function Counter() {
  // state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      {/* გაზრდა */}
      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      {/* შემცირება */}
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

export default Counter;
import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You wrote: {text}</p>
    </div>
  );
}

// კაუჭი (Hook) არის სპეციალური ფუნქცია React-ში,
// რომელიც გვაძლევს საშუალებას გამოვიყენოთ React-ის ფუნქციები
// (მაგ: state, lifecycle) ფუნქციურ კომპონენტებში.

// ადრე ეს შესაძლებლობა მხოლოდ class კომპონენტებში იყო,
// მაგრამ Hooks-ის დახმარებით იგივე შეგვიძლია function კომპონენტებში.


// Hooks შექმნეს იმისთვის რომ:

// 1. აღარ დაგვჭირდეს class კომპონენტები
// 2. კოდი გახდეს უფრო მარტივი და გასაგები
// 3. logic მარტივად გავაზიაროთ კომპონენტებს შორის
// 4. ნაკლები boilerplate კოდი დავწეროთ

// ანუ Hooks = უფრო მარტივი და თანამედროვე React




// Hooks ვიყენებთ როცა გვჭირდება:

// ✔ state (მონაცემების შენახვა)
// ✔ გვერდის განახლების კონტროლი
// ✔ API-სთან მუშაობა
// ✔ lifecycle-ის მსგავსი ქცევა

// მაგალითად:
// - input value-ს შენახვა
// - counter
// - fetch data


// useState არის Hook,
// რომელიც გვაძლევს საშუალებას შევინახოთ state ფუნქციურ კომპონენტში.

// state = მონაცემი რომელიც იცვლება
// მაგალითად: count, input value, user data