import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';

type SearchContextType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isPromo: boolean;
  setIsPromo: Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const useSerachData = () => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setPage(1);
  }, [search, isPromo, isActive]);

  return {
    page,
    setPage,
    isActive,
    setIsActive,
    isPromo,
    setIsPromo,
    search,
    setSearch,
  };
};

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined,
);
