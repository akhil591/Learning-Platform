// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Lessons from "./pages/Lessons";

// Optional: You can wrap routes with a layout or header component later
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />

          {/* Onboarding Flow */}
          <Route path="/onboarding" element={<Onboarding />} />

          {/* Lesson Display */}
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
