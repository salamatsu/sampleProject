import React from "react";
import { Route } from "react-router-dom";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import {
  Landing,
  Login,
  PageLayout,
  PageLayout2,
  Dashboard,
  Admin,
  Users,
  Reports,
  Forms,
} from "../../pages/admin/home";

const getisAuth = () => {
  const storage = JSON.parse(localStorage.getItem("persist:authAdmin"));
  return storage?.userInfo ? JSON.parse(storage.userInfo) : null;
};

const Auth = () => {
  const auth = getisAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/admin-login" state={{ from: location }} replace />
  );
};

const UnAuthIFuel = () => {
  const auth = getisAuth();
  const location = useLocation();
  return auth ? (
    <Navigate to="/admin-homepage" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

const adminRoutes = () => {
  return (
    <>
      <Route element={<PageLayout />}>
        <Route path="admin-login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Route>

      <Route element={<PageLayout2 />}>
        <Route path="/2" element={<Dashboard />} />
        <Route path="2-admin" element={<Admin />} />
        <Route path="2-users" element={<Users />} />
        <Route path="2-reports" element={<Reports />} />
        <Route path="2-forms" element={<Forms />} />
      </Route>
    </>
  );
};

export default adminRoutes;
