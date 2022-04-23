import { BrowserRouter as Router } from "react-router-dom";
import { AppProvidersProps } from "./AppProviders.types";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Router basename={process.env.PUBLIC_URL}>{children}</Router>
);
