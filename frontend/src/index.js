import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Lesson from "./components/Lesson";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* cookieの関数を使えるようにする */}
      <CookiesProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/youtube" component={App} />
        <Route exact path="/lesson" component={Lesson} />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
