import { BrowserRouter, Route,Routes,HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import AddProperty from "../pages/AddProperty";
import SpecificProperty from "../pages/SpecificProperty";
const Routes1 = ({children}) => {
  const isUserLogged = JSON.parse(localStorage.getItem('orna'))
  return (
    <HashRouter>
    {children}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {isUserLogged &&
        <>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/specific-property" element={<SpecificProperty />}></Route>
        </>
        }
      </Routes>
    </HashRouter>
  );
};
export default Routes1;
