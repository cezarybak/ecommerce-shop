import { Input, Checkbox, Avatar, Button } from 'components';
import { useAuth } from 'hooks';
import { useSearchContext } from 'hooks/useSerachContext';
import { useNavigate } from 'react-router-dom';

import './style.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useSearchContext()!;
  const { removeLocalData } = useAuth();

  return (
    <header className="header">
      <div>
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
        <Button
          bg="white"
          type="button"
          value="saasas"
          onClick={() => removeLocalData()}
        />
        <Avatar />
      </div>
    </header>
  );
};
