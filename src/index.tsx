import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="exchanges" element={<Exchanges/>}/> HOME*/}
        {/* <Route path="exchanges" element={<Exchanges/>}/> EXCHANGES*/}
        {/* <Route path="exchanges" element={<Exchanges/>}/> CRYPTO DETAILS*/}
        {/* <Route path="exchanges" element={<Exchanges/>}/> CRYPTO NEWS*/}
        {/* <Route path="exchanges" element={<Exchanges/>}/> CRYPTO CURRENCIES*/}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
