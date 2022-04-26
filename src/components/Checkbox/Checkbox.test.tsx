import { render, screen, fireEvent } from 'tests';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('Renders correctly', async () => {
    let checkedValue: boolean | undefined;

    const { getByText } = render(
      <Checkbox
        onChange={() => {
          checkedValue = checkedValue ? undefined : true;
        }}
        key="sasa"
        value={false}
        label="label"
      />,
    );
    2;

    expect(getByText('label')).toBeInTheDocument();
  });
});

describe('Checkbox-On-Click', () => {
  test('Renders correctly', async () => {
    let checkedValue: boolean | undefined;

    render(
      <Checkbox
        onChange={() => {
          checkedValue = checkedValue ? undefined : true;
        }}
        value={checkedValue}
        label="label"
      />,
    );
    2;

    fireEvent.click(screen.getByText('label'));

    expect(checkedValue === true);
  });
});
