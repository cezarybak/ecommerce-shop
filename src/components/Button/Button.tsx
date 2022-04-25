import './style.scss';

type Props = {
  value: string;
  disabled?: boolean;
  type: 'button' | 'submit';
  bg: 'white' | 'purple';
  onClick?: () => void;
};

export const Button = ({
  value,
  disabled,
  type,
  bg = 'purple',
  onClick,
}: Props) => (
  <button
    className={` ${bg === 'white' ? 'background-white' : 'button-block'}`}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {value}
  </button>
);
