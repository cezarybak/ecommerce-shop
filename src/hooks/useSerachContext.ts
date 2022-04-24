import { SearchContext } from 'context';
import { useContext } from 'react';

export const useSearchContext = () => {
  const data = useContext(SearchContext);
  return data!;
};
