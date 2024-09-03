import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";


function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/movies" element={<Movies/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
