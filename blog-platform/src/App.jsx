import "./css/App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { getCurrentUser } from "./services/Loginservice";

function App() {
  const user=getCurrentUser()

  return (
    <>
     
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit/:id" element={<Edit />} />
          {user === "Guest" ?
          <Route path="/Login" element={<Login />} />:null}
        </Routes>
      </main>
    </>
  );
}

export default App;

