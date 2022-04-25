import { Dispatch, SetStateAction } from 'react';

import './style.scss';

type Props = {
  value: boolean | undefined;
  onChange: Dispatch<SetStateAction<boolean | undefined>>;
  label: string;
};

export const Checkbox = ({ value, onChange, label }: Props) => (
  <div className="checkbox">
    <input type="checkbox" checked={value} onChange={() => onChange} />
    <label htmlFor={label}>{label}</label>
  </div>
);
