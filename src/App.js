import Bottom from "./Components/Bottom/bottom";
import Left from "./Components/Left/left";
import Right from "./Components/Left/Right/right";

function App() {
  return (
    <div className="container">
      <div className="container flex flex-row justify-between">
        <Left></Left>
        <Right></Right>
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
