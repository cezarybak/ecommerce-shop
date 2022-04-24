import { Avatar } from 'components/Avatar/Avatart';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { Search } from 'components/Search/Search';
import { useSearchContext } from 'hooks/useSerachContext';
import { useNavigate } from 'react-router-dom';

import './style.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useSearchContext()!;

  return (
    <header className="header">
      <h2 onClick={() => navigate('/')}>join.tsh.ui</h2>
      <div>
        <Search search={search} setSearch={setSearch} />
        <div>
          <Checkbox />
          <Checkbox />
        </div>
      </div>
      <Avatar />
    </header>
  );
};
