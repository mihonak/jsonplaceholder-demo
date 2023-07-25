import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Router } from "./router/Router";
import ButtonAppBar from "./components/Appbar";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
