import { Search } from 'components/Search/Search';
import { useSearchContext } from 'hooks/useSerachContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useSearchContext()!;

  return (
    <header>
      <h2 onClick={() => navigate('/')}>join.tsh.ui</h2>
      <Search search={search} setSearch={setSearch} />
    </header>
  );
};
