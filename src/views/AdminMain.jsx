import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/SideBar";

const AdminMain = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", margin: 0 }}>
      <AdminSideBar />
      <Outlet />
    </div>
  );
};
//tst
export default AdminMain;
