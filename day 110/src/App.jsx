function App() {

  

  return (
    <div>

      

      {/* მაგალითი 1 */}
      <div className="box1">Example 1</div>

      {/* მაგალითი 2 */}
      <h1 className="title">Example 2</h1>

      {/* მაგალითი 3 */}
      <p className="text">Example 3</p>



    

      <img src="https://via.placeholder.com/100" alt="img" />
      <input type="text" />
      <input type="password" />
      <br />
      <hr />
      <meta />
      <link />
      <area />
      <base />
      <col />



      

      <h2>{5 + 5}</h2>
      <p>{"Hello World"}</p>
      <p>{true ? "Yes" : "No"}</p>
      <p>{10 > 5 && "True"}</p>
      <p>{Math.random()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>{[1,2,3].length}</p>
      <p>{10 * 2}</p>
      <p>{100 / 5}</p>
      <p>{`Template ${5}`}</p>



      

      {(() => {
        const name = "Luka";
        const age = 20;
        const city = "Tbilisi";
        const number = 7;
        const isStudent = true;
        const color = "red";
        const score = 95;
        const hobby = "Coding";
        const year = 2026;
        const price = 50;

        return (
          <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
            <p>{number}</p>
            <p>{isStudent ? "Student" : "Not student"}</p>
            <p style={{ color: color }}>Colored Text</p>
            <p>{score}</p>
            <p>{hobby}</p>
            <p>{year}</p>
            <p>{price}$</p>
          </div>
        );
      })()}

    </div>
  );
}

export default App;