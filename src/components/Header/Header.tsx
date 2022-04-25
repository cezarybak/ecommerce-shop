import { Input, Checkbox } from 'components';
import { Avatar } from 'components/Avatar/Avatart';
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
        <Input
          type="text"
          placeholder="Search"
          search={search}
          setSearch={setSearch}
          isSearch
        />
        <div>
          <Checkbox />
          <Checkbox />
        </div>
      </div>
      <Avatar />
    </header>
  );
};
