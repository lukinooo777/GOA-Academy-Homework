import { useState } from "react";
import Navbar from "./components/Navbar";
import Samsung from "./pages/Samsung";
import Apple from "./pages/Apple";
import Xiaomi from "./pages/Xiaomi";
import Huawei from "./pages/Huawei";
import Personal from "./pages/Personal";

function App() {
  const [page, setPage] = useState("samsung");

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar setPage={setPage} />

      {page === "samsung" && <Samsung />}
      {page === "apple" && <Apple />}
      {page === "xiaomi" && <Xiaomi />}
      {page === "huawei" && <Huawei />}
      {page === "personal" && <Personal />}
    </div>
  );
}

export default App;