import { useSearchContext } from './useSerachContext';

const usePaginationLogin = (totalPageCount: number) => {
  const { page, setPage } = useSearchContext();
  const pageCountMap = [...Array(totalPageCount).keys()];

  if (totalPageCount > 6) {
  } else {
  }

  return {
    page,
    setPage,
  };
};
