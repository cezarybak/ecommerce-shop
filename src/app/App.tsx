import { AppProviders } from "providers/AppProviders";
import { AppRoutes } from "components/routing/AppRoutes";

export const App = () => {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
};
