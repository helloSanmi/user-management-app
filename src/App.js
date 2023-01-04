import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
       <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path='/preferences' element={<Preferences />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
