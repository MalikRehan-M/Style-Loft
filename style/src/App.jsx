import logo from "./Style_Loft_final_logo-removebg-preview.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img
          src={logo}
          alt="logo"
          style={{
            border: "1px solid",
            height: "400px",
            backgroundColor: "yellow",
          }}
        />
        <h1>Malikrehan</h1>
      </div>
    </div>
  );
}

export default App;
