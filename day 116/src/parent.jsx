import Child from "./Child";

function Parent() {

  const numbers = [1, 2, 3, 4];

  const user = {
    name: "Davit",
    age: 20
  };

  function greet() {
    alert("Hello from parent function!");
  }

  return (
    <div>
      <Child
        name="Luka"
        age={18}
        isStudent={true}
        city="Tbilisi"
        country="Georgia"
        height={180}
        married={false}
        numbers={numbers}
        user={user}
        greet={greet}
      />
    </div>
  );
}

export default Parent;