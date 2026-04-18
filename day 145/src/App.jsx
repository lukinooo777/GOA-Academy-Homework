// ================================
// 2. Inline Style - 3 მაგალითი
// ================================

function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello</h1>

      <p style={{ fontSize: "25px" }}>React</p>

      <button style={{ backgroundColor: "blue", color: "white" }}>
        Click
      </button>
    </div>
  );
}




// ================================
// 3. Object Style - 3 მაგალითი
// ================================

function App() {
  const titleStyle = {
    color: "green",
    fontSize: "30px",
  };

  const textStyle = {
    color: "purple",
  };

  const btnStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  };

  return (
    <div>
      <h1 style={titleStyle}>Title</h1>

      <p style={textStyle}>Paragraph</p>

      <button style={btnStyle}>Send</button>
    </div>
  );
}

export default App;



// =====================================
// 4. Multiple Stylesheet - 3 მაგალითი
// =====================================

// App.jsx
import "./style1.css";
import "./style2.css";

function App() {
  return (
    <div>
      <h1 className="title">Hello</h1>

      <p className="text">React CSS</p>

      <button className="btn">Click</button>
    </div>
  );
}



export default App