import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { AppRoute } from 'routing';

export const ProtectedRoute = ({ children }: any) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={AppRoute.Login} replace />;
  }

  return children;
};
