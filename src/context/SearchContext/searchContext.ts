import { createContext, Dispatch, SetStateAction, useState } from 'react';

type SearchContextType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isPromo: boolean;
  setIsPromo: Dispatch<SetStateAction<boolean>>;
  search: string;
  setIsSearch: Dispatch<SetStateAction<string>>;
};

const SerachData = () => {
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [isPromo, setIsPromo] = useState(false);
  const [search, setIsSearch] = useState('');

  return {
    page,
    setPage,
    isActive,
    setIsActive,
    isPromo,
    setIsPromo,
    search,
    setIsSearch,
  };
};

export const SearchContext = createContext<SearchContextType>({
  ...SerachData(),
});
