import { Dispatch, SetStateAction } from 'react';

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const Search = ({ search, setSearch }: Props) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
