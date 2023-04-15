import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./components/context/Context";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Singlepost from "./pages/singlepage/Singlepost";
import Write from "./pages/write/Write";

function App() {
  var { user } = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/post/:id" element={<Singlepost />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
