import { useDebounce } from '../useDebounce';
import { renderHook } from '@testing-library/react-hooks';

test('useDebounce test', () => {
  const { result } = renderHook(() => {
    const value = useDebounce('debounce', 200);
    return { value };
  });

  expect(result.current.value).toBe('debounce');
});
