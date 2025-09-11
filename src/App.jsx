import "./App.css";
import { ChatComponent } from "./components/ChatComponent";
import { ModelTypesGrid } from "./components/Androids/ModelTypesGrid";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
function App() {
  return (
    <main className="main-container">
      <Navbar />
      <div className='hero'>
        {/* <ModelTypesGrid /> */}
        <h1>Hacking into NIER...</h1>
        <img src='../cover_art.jpg' />
       </div> 
      <div className="chat-bot-container">
        <ChatComponent />
        </div>
      <Footer />
    </main> 
  );
}

export default App;
