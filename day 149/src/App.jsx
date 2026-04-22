import React from "react";
import { useState, useEffectt}


function User(props) {
  const {name, Age} = props;


  return(
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  )
}

function App() {
  const user = {
  name: "luka",
  Age: "17"
  }
  return(
    <div>
      <User name={user.name} Age={user.Age} />
    </div>
  )
}




function App() {
  const [user, setUser] = useState(null);


  const getUser = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "Luka", age: 17 });
      }, 2000);
    });
  };

  useEffect(() => {
    getUser()
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {user ? (
        <h1>{user.name} - {user.age}</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}


export default App