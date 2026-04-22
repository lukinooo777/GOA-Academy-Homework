import { useState } from "react";

function App() {
  // მაგალითი 1 - input text
  const [name, setName] = useState("");

  // მაგალითი 2 - textarea
  const [message, setMessage] = useState("");

  // მაგალითი 3 - select
  const [city, setCity] = useState("თბილისი");

  // მაგალითი 4 - checkbox
  const [agree, setAgree] = useState(false);

  // მაგალითი 5 - multiple inputs
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      {/* მაგალითი 1 */}
      <h2>1. Name Form</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>

      {/* მაგალითი 2 */}
      <h2>2. Message Form</h2>
      <textarea
        placeholder="Write message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>

      {/* მაგალითი 3 */}
      <h2>3. Select Form</h2>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>თბილისი</option>
        <option>ბათუმი</option>
        <option>ქუთაისი</option>
      </select>
      <p>{city}</p>

      {/* მაგალითი 4 */}
      <h2>4. Checkbox Form</h2>
      <input
        type="checkbox"
        checked={agree}
        onChange={() => setAgree(!agree)}
      />
      <p>{agree ? "ვეთანხმები" : "არ ვეთანხმები"}</p>

      {/* მაგალითი 5 */}
      <h2>5. Login Form</h2>
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
      />

      <p>{user.email}</p>
      <p>{user.password}</p>
    </div>
  );
}

export default App;