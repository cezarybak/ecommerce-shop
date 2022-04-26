import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

import './style.scss';

export const Badge = ({ children }: Props) => {
  return (
    <div className="badge">
      <span>{children}</span>
    </div>
  );
};
