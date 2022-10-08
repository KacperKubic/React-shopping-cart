import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
