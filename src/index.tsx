import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import {
  Exchanges,
  HomePage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="exchanges" element={<Exchanges />} />
          <Route
            path="cryptocurrencies"
            element={<Cryptocurrencies simplified={false} />}
          />
          <Route path="crypto/:coinId" element={<CryptoDetails />} />
          <Route path="news" element={<News />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  rootElement
);
