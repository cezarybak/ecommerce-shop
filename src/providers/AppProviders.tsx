import { SearchContext, useSerachData } from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => {
  const searchValue = useSerachData();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <SearchContext.Provider value={searchValue}>
        {children}
      </SearchContext.Provider>
    </Router>
  );
};
