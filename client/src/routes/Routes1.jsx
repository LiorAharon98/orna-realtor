import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import AddProperty from "../pages/AddProperty";
import SpecificProperty from "../pages/SpecificProperty";
const Routes1 = ({children}) => {
  return (
    <BrowserRouter>
    {children}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/specific-property" element={<SpecificProperty />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routes1;
