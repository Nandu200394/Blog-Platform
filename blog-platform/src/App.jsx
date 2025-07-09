import "./css/App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

