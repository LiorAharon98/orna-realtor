import { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Routes1 from "./routes/Routes1";
import { useDispatch } from "react-redux";
import { userAction } from "./store/Index";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("orna"))) {
      dispatch(userAction.logged());
    }
  }, []);
  return (
    <Routes1>
      <Header />
    </Routes1>
  );
}

export default App;
