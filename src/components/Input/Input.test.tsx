import { useState } from 'react';
import { screen, render, renderHook } from 'tests';
import { Input } from './Input';

describe('Input', () => {
  test('Renders correctly', async () => {
    const { result } = renderHook(() => {
      const [search, setSearch] = useState('');
      return { search, setSearch };
    });

    render(
      <Input
        placeholder="search"
        type="text"
        setSearch={(e) => result.current.setSearch('test')}
        search={result.current.search}
      />,
    );
    2;

    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
  });
});
