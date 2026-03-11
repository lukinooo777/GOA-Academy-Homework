

function Age(props) {
  return (
    <h2>My age is {props.number}</h2>
  );
}

import Age from "./Age";

function App() {
  return (
    <div>
      <Age number={18} />
      <Age number={25} />
      <Age number={30} />
    </div>
  );
}

export default App;


function Greeting(props) {
  return (
    <h2>Hello, {props.name}!</h2>
  );
}


import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Davit" />
      <Greeting name="Nino" />
      <Greeting name="Luka" />
    </div>
  );
}

