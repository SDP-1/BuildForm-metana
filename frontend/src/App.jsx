import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abc from "./pages/Abc";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Abc />} />
      </Routes>
    </Router>
  );
}

export default App;
