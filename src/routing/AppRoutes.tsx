import { SearchContext, useSerachData } from 'context';
import { Login, Products } from 'pages';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  const searchData = useSerachData();
  return (
    <Routes>
      <Route
        path={AppRoute.Home}
        element={
          <SearchContext.Provider value={searchData}>
            <Products />
          </SearchContext.Provider>
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
