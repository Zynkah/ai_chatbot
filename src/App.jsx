import "./App.css";
import { ChatComponent } from "./components/ChatComponent";
import { ModelTypesGrid } from "./components/Androids/ModelTypesGrid";

function App() {
  return (
    <div>
      {/* <img src="../2B_Nier_Automata.png" alt="2B" /> */}
<ModelTypesGrid />
      <div style={{ position: "absolute", bottom: "5%", right: "5%" }}>
        <ChatComponent />
      </div>
    </div>
  );
}

export default App;
