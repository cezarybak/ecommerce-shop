import { useSearchContext } from 'hooks/useSerachContext';
import './style.scss';

type Props = {
  totalPageCount?: number;
};

export const Pagination = ({ totalPageCount }: Props) => {
  const { page, setPage } = useSearchContext();
  const pageCountMap = [...Array(totalPageCount).keys()];

  return (
    <nav className="pagination">
      <ul>
        <button disabled={page === 1} type="button">
          First
        </button>
        {pageCountMap.map((e) => (
          <li
            className={`${e === page && ''}`}
            onClick={() => setPage(e + 1)}
            key={e}
          >
            {e + 1}
          </li>
        ))}
        <button type="button" disabled={page === totalPageCount}>
          Last
        </button>
      </ul>
    </nav>
  );
};
