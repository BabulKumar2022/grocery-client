
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import Grocery from "./components/Grocery/Grocery";
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
