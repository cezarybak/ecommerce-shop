import { useSearchContext } from 'hooks/useSerachContext';
import './style.scss';

type Props = {
  totalPageCount?: number;
};

export const Pagination = ({ totalPageCount }: Props) => {
  const { page, setPage } = useSearchContext();
  const pageCountMap = [...Array(totalPageCount).keys()];

  return (
    <nav>
      <div>
        <ul>
          {pageCountMap.map((e) => (
            <li onClick={() => setPage(e + 1)} key={e}>
              {e + 1}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
