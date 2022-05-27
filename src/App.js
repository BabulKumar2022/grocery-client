
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import AddProduct from "./components/Dashboard/AddProduct";
import Dashboard from "./components/Dashboard/Dashboard";
import ManageProduct from "./components/Dashboard/ManageProduct";
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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AddProduct></AddProduct>}></Route>
          <Route path="manage" element={<ManageProduct></ManageProduct>}></Route>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
