import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as SearchIcon } from 'assets/svgIcons/searchIcon.svg';

import './style.scss';

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

export const Search = ({ search, setSearch }: Props) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="search__icon" />
    </div>
  );
};
