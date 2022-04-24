import { SearchContext, useSerachData } from 'context';
import { AuthContext, useAuthData } from 'context/AuthContext/authContext';
import { Login, Products } from 'pages';
import { ProtectedRoute } from 'providers';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  const searchData = useSerachData();
  return (
    <Routes>
      <Route
        path={AppRoute.Home}
        element={
          <ProtectedRoute>
            <SearchContext.Provider value={searchData}>
              <Products />
            </SearchContext.Provider>
          </ProtectedRoute>
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
