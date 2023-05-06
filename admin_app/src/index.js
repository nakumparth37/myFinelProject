import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { ListContextProvider } from "./context/listContext/ListContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
