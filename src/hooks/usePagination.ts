import { useSearchContext } from './useSerachContext';

const countMap = (count: number, point: number) =>
  [...Array(count).keys()].map((e) => e + point);

export const usePagination = (totalPageCount: number) => {
  const { page } = useSearchContext();
  const pageCountMap = [...Array(totalPageCount).keys()];

  if (totalPageCount > 6) {
    const startPoint = countMap(
      3,
      page > totalPageCount - 3
        ? totalPageCount - 5
        : page - 2 > 0
        ? page - 2
        : 1,
    );
    const endPoint = countMap(3, totalPageCount - 2);

    return { countMap: [...startPoint, '...', ...endPoint] };
  } else {
    return { countMap: pageCountMap };
  }
};
