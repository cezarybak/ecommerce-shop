import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as SearchIcon } from 'assets/svgIcons/searchIcon.svg';

import './style.scss';
import { Noop, RefCallBack } from 'react-hook-form';

type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  isSearch?: boolean;
  label?: string;
  placeholder: string;
  ref?: RefCallBack;
  type: 'text' | 'password';
  onBlur?: Noop;
  error?: boolean;
};

export const Input = ({
  search,
  setSearch,
  isSearch,
  label,
  placeholder,
  ref,
  type,
  onBlur,
  error,
}: Props) => {
  return (
    <div className="search">
      {!!label && <label htmlFor={label}>{label}</label>}
      <div>
        <input
          id={label}
          onBlur={onBlur}
          className={`search__input ${error && 'border-error'} ${
            !isSearch && 'placeholder-gray'
          } `}
          placeholder={placeholder}
          type={type}
          ref={ref}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!!isSearch && <SearchIcon className="search__icon" />}
      </div>
    </div>
  );
};
