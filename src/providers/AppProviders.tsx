import { AuthContext, useAuthData } from 'context/AuthContext/authContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const authData = useAuthData();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </Router>
  );
};
