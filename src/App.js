import "./App.css";
import Header from "./component/Header/Header";
import Team from "./component/Teams/Team";

function App() {
  return (
    <div className="full-width">
      {/* header  */}
      <Header />
      {/* team data  */}
      <Team />
    </div>
  );
}

export default App;
