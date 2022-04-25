import './style.scss';

type Props = {
  value: string;
  disabled: boolean;
  type: 'button' | 'submit';
  bg: 'white' | 'purple';
  onClick?: () => void;
};

export const Button = ({ value, disabled, type, bg, onClick }: Props) => (
  <button
    className={`button-block ${bg === 'white' && 'background-purple'} `}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {value}
  </button>
);
