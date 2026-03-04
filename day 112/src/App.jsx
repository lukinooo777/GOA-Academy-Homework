import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function FruitsList() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
 

function UsersList() {
  const users = [
    { id: 1, name: 'Ani', age: 23 },
    { id: 2, name: 'Giorgi', age: 30 },
    { id: 3, name: 'Nino', age: 28 }
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}


const colors = ['Red', 'Green', 'Blue'];
const list = colors.map(color => <p key={color}>{color}</p>);




export default App
