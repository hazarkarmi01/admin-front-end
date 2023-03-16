import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./views/login";
import AdminMain from "./views/AdminMain";
import { MantineProvider } from "@mantine/core";
import Users from "./views/admin/Users";
import Annonce from "./views/admin/Annonce";
import Category from "./views/admin/Category";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="admin" element={<AdminMain />}>
                <Route path="users" element={<Users />} />
                <Route index element={<Annonce />} />
                <Route path="categories" element={<Category />} />
              </Route>
            </Route>
          </Routes>
        </Provider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
