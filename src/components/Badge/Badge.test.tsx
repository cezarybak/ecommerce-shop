import { render } from 'tests';
import { Badge } from './Badge';

describe('Badge', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(<Badge>badge</Badge>);

    expect(getByText('badge')).toBeInTheDocument();
  });
});
