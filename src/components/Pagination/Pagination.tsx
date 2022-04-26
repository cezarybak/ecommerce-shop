import { usePagination } from 'hooks';
import { useSearchContext } from 'hooks/useSerachContext';
import './style.scss';

interface Props {
  totalPageCount?: number;
}

export const Pagination = ({ totalPageCount }: Props) => {
  const { page, setPage } = useSearchContext();
  const { countMap } = usePagination(totalPageCount!);

  return (
    <nav className="pagination">
      <ul>
        <button disabled={page === 1} onClick={() => setPage(1)} type="button">
          First
        </button>
        {countMap.map((e, index) => {
          const typeOfElement = typeof e;

          return (
            <>
              {typeOfElement === 'number' ? (
                <li
                  className={`${e === page && 'pagination-acitve'}`}
                  onClick={() => {
                    setPage(Number(e));
                  }}
                  key={index}
                >
                  {e}
                </li>
              ) : (
                <li key={index} className="pagination-nopointer">
                  {e}
                </li>
              )}
            </>
          );
        })}
        <button
          type="button"
          onClick={() => setPage(totalPageCount!)}
          disabled={page === totalPageCount}
        >
          Last
        </button>
      </ul>
    </nav>
  );
};
