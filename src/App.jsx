import "./App.css";
import { ChatComponent } from "./components/ChatComponent";
import { ModelTypesGrid } from "./components/Androids/ModelTypesGrid";

function App() {
  return (
    <div style={{ margin: 'auto'}}>
      {/* <img src="../2B_Nier_Automata.png" alt="2B" /> */}
      {/* <img src="../2465448.svg" style={{ position: 'absolute', top: 0, left: 0, objectFit:'cover' }} /> */}
      <ModelTypesGrid />
      <div class='chat-bot-container'>
        <ChatComponent />
      </div>
    </div>
  );
}

export default App;
