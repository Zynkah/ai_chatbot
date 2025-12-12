import "./App.css";
import { ChatComponent } from "./components/ChatComponent";
import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import { Androids } from "./components/pages/Androids";
import { Home } from "./components/pages/Home";
import { Yorha } from "./components/pages/Yohra";
import { World } from "./components/pages/World";
import { Robots } from "./components/pages/Robots";

function App() {
  return (
    <main className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/yorha" element={<Yorha />} />
        <Route path="/androids" element={<Androids />} />
        <Route path="/robots" element={<Robots />} />
        <Route path="/world" element={<World />} />
      </Routes>
      <div className="chat-bot-container">
        <ChatComponent />
      </div>
    </main>
  );
}

export default App;
