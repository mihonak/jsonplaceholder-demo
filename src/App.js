import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { Router } from "./router/Router";
import ButtonAppBar from "./components/Appbar";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;
