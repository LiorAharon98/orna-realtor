import "./App.css";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import SpecificProperty from "./pages/SpecificProperty";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/specific-property" element={<SpecificProperty />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
