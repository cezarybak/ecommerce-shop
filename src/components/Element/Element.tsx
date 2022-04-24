import { ReactComponent as StarOffIcon } from 'assets/svgIcons/starOffIcon.svg';
import { ReactComponent as StarOnIcon } from 'assets/svgIcons/starOnIcon.svg';
import { ProductDto } from 'generated';
import { Dispatch, SetStateAction } from 'react';

import './style.scss';

type Props = ProductDto & {
  setModelOpen: Dispatch<SetStateAction<number | null>>;
};

export const Element = ({
  active,
  description,
  image,
  name,
  promo,
  rating,
  id,
  setModelOpen,
}: Props) => {
  return (
    <div>
      <img src={image} alt={`${id}-product-image`} />
      <h3>{name}</h3>
      <span>{description}</span>

      <div>
        <StarOffIcon />
        <StarOnIcon />
      </div>
      <button onClick={() => setModelOpen(id)}>Show details</button>
    </div>
  );
};
