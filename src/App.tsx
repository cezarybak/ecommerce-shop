import { AppProviders } from "providers/AppProviders";
import { AppRoutes } from "components/routing/AppRoutes";

import "./App.scss";

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
