import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForRent from "./pages/ForRent";
import ForSale from "./pages/ForSale";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Register from "./pages/Register";
import NavBar from './layouts/NavBar';
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element=<Home/>/>
      <Route path='/sale' element=<ForSale/>/>
      <Route path="/rent" element=<ForRent/>/>
      <Route path="/company" element=<Company/>/>
      <Route path="/register" element=<Register/>/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
