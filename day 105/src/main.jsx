import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function Navbar({ setPage }) {
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={() => setPage("samsung")}>Samsung</button>
      <button onClick={() => setPage("apple")}>Apple</button>
      <button onClick={() => setPage("xiaomi")}>Xiaomi</button>
      <button onClick={() => setPage("huawei")}>Huawei</button>
      <button onClick={() => setPage("personal")}>Personal</button>
    </div>
  );
}

export default Navbar;
