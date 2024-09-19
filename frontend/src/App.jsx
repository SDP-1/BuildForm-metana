import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Samplepage from "./pages/samplepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Samplepage />} />
      </Routes>
    </Router>
  );
}

export default App;
