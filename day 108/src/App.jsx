function Example() {
  const name = "Luka";
  const number = 10;

  return (
    <div>
      <h2>Hello {name}</h2>
      <p>5 + 5 = {5 + 5}</p>
      <p>Number is {number}</p>
      <p>{number > 5 ? "Big" : "Small"}</p>
      <p>{new Date().getFullYear()}</p>
    </div>
  );
}




function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is JSX</p>
    </div>
  );
}






import Example from "./Example";

function App() {
  return (
    <div>
      <h1>React Level 108</h1>
      <Example />
    </div>
  );
}


export default Example;