import Home from "./pages/Home/Home";
import { WeatherContext } from "./context/weatherContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherContext>
        <Home />
      </WeatherContext>
    </div>
  );
}

export default App;
