import { Search } from 'components/Search/Search';
import { useSearchContext } from 'hooks/useSerachContext';

export const Header = () => {
  const {} = useSearchContext();
  return (
    <header>
      <h2>join.tsh.ui</h2>
      <Search />
    </header>
  );
};
