import { Input, Avatar, Button, Checkbox } from 'components';
import { useAuth } from 'hooks';
import { useSearchContext } from 'hooks/useSerachContext';
import { useNavigate } from 'react-router-dom';

import './style.scss';

export const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch, isActive, isPromo, setIsActive, setIsPromo } =
    useSearchContext()!;
  const { token } = useAuth();

  return (
    <header className="header">
      <div>
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
              <Checkbox
                value={isActive}
                label="Active"
                onChange={() => setIsActive(true)}
              />
              <Checkbox
                value={isPromo}
                label="Promo"
                onChange={() => setIsPromo(true)}
              />
            </div>
          </div>
        </div>
        <div>
          {token ? (
            <Avatar />
          ) : (
            <Button
              bg="white"
              type="button"
              value="Log in"
              onClick={() => navigate('/login', { replace: true })}
            />
          )}
        </div>
      </div>
    </header>
  );
};
