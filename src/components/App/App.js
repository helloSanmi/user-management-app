import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../../App.css';
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

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
