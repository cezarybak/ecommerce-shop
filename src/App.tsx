import { AppProviders } from 'providers';
import { AppRoutes } from 'routing';

import './App.scss';

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
