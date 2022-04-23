import { Login, Products } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Products />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
