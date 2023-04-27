import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./views/login";
import AdminMain from "./views/AdminMain";

import Users from "./views/admin/Users";
import Annonce from "./views/admin/Annonce";
import Category from "./views/admin/Category";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppGlobalStyles from "./components/AppGlobalStyles";
function App() {
  return (
    <BrowserRouter>

      <Provider store={store}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="admin" element={<AdminMain />}>
              <Route index element={<Users />} />
              <Route path="annonces" element={<Annonce />} />
              <Route path="categories" element={<Category />} />
            </Route>
          </Route>
        </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
