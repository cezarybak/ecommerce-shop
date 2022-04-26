import { fireEvent, render, screen } from 'tests';
import { Button } from './Button';

describe('Button', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(
      <Button value="button" type="button" bg="white" />,
    );

    expect(getByText('button')).toBeInTheDocument();
  });
});

describe('Button-Disabled', () => {
  test('Renders correctly', async () => {
    const { getByText } = render(
      <Button value="button" disabled={true} type="button" bg="white" />,
    );

    expect(getByText('button')).toBeDisabled();
  });
});

describe('Button-On-Click', () => {
  test('Renders correctly', async () => {
    let sum = 0;

    render(
      <Button
        value="button"
        onClick={() => {
          sum = 1 + 1;
        }}
        disabled={true}
        type="button"
        bg="white"
      />,
    );

    fireEvent.click(screen.getByText('button'));

    expect(sum === 2);
  });
});
