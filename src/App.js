import "./App.css";
import Rooms from "./pages/Roomschat.js";
import Messages from "./pages/Messages.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Rooms />} />
          <Route path="/Messages/:roomId" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
