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
      <div className="container">
        <h2 onClick={() => navigate('/')}>join.tsh.ui</h2>
        <div className="search-wraper">
          <Input
            type="text"
            placeholder="Search"
            search={search}
            setSearch={setSearch}
            isSearch
          />
        </div>
        <div className="checkbox-wraper">
          <Checkbox
            value={isActive}
            label="Active"
            onChange={() => setIsActive((prev) => (prev ? undefined : true))}
          />
          <Checkbox
            value={isPromo}
            label="Promo"
            onChange={() => setIsPromo((prev) => (prev ? undefined : true))}
          />
        </div>
        <div className="navigation-wraper">
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
