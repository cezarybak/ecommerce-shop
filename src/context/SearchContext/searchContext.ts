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
  isActive: boolean | undefined;
  setIsActive: Dispatch<SetStateAction<boolean | undefined>>;
  isPromo: boolean | undefined;
  setIsPromo: Dispatch<SetStateAction<boolean | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const useSerachData = () => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState<boolean | undefined>(undefined);
  const [isPromo, setIsPromo] = useState<boolean | undefined>(undefined);
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
