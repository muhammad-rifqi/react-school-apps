// import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import ProfileSchool from "./pages/ProfileSchool";

function App() {
  // const [menu, setMenu] = useState<"home" | "profile">("home");

  return (
   <BrowserRouter>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/profile-sekolah">Profile Sekolah</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-sekolah" element={<ProfileSchool />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
