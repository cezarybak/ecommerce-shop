import { AppProviders } from 'providers/AppProviders';
import { AppRoutes } from 'components/Routing/AppRoutes';

import './App.scss';

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
