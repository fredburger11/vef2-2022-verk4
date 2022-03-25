import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from './Login';
import AnEvent from './components/AnEvent.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path=":eventId" element={<AnEvent />}/>
      <Route path="Login" element={<Login/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);