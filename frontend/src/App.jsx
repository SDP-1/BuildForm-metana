import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Abc from "./pages/Abc";
import WelcomeSidebar from "./components/WelcomeSidebar";

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
