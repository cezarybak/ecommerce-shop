import { usePagination } from 'hooks';
import { useSearchContext } from 'hooks/useSerachContext';
import { number } from 'zod';
import './style.scss';

type Props = {
  totalPageCount?: number;
};

export const Pagination = ({ totalPageCount }: Props) => {
  const { page, setPage } = useSearchContext();
  const { countMap } = usePagination(totalPageCount!);

  return (
    <nav className="pagination">
      <ul>
        <button disabled={page === 1} onClick={() => setPage(1)} type="button">
          First
        </button>
        {countMap.map((e, index) => (
          <li
            className={`${e === page && ''}`}
            onClick={() => {
              setPage(typeof e === 'number' ? e : index);
            }}
            key={e}
          >
            {e}
          </li>
        ))}
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
