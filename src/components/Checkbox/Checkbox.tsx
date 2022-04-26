import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as CheckIcon } from 'assets/svgIcons/checkIcon.svg';

import './style.scss';

type Props = {
  value: boolean | undefined;
  onChange: () => void;
  label: string;
};

export const Checkbox = ({ value, onChange, label }: Props) => (
  <label className="checkbox">
    <input type="checkbox" hidden onClick={() => onChange()} checked={value} />
    <CheckIcon className={`${value && 'checkbox-active'} checkbox-border`} />
    <span className="text">{label}</span>
  </label>
);
