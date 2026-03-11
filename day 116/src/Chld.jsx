function Child(props) {

  // destructuring
  const { name, age, isStudent, numbers, user, greet } = props;

  return (
    <div>
      {/* Object dot notation */}
      <h2>City: {props.city}</h2>
      <h2>Country: {props.country}</h2>
      <h2>Height: {props.height}</h2>
      <h2>Married: {props.married.toString()}</h2>

      {/* Destructuring */}
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Student: {isStudent.toString()}</h2>

      <h2>Numbers: {numbers.join(", ")}</h2>

      <h2>User object: {user.name} - {user.age}</h2>

      <button onClick={greet}>Click function prop</button>
    </div>
  );
}

export default Child;