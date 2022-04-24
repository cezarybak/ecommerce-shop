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
  const ratingMap = [...Array(5).keys()].map((e) => e + 1 <= rating);

  console.log(rating, name);
  return (
    <div className="element">
      <div className="img-wraper">
        {!!promo && <span>Promo</span>}
        <img src={image} alt={`${id}-product-image`} />
      </div>
      <div className="content-wraper">
        <h3>{name}</h3>
        <span>{description}</span>

        <div className="rating">
          {ratingMap.map((e) => (e ? <StarOnIcon /> : <StarOffIcon />))}
        </div>
        <button disabled={active} onClick={() => setModelOpen(id)}>
          Show details
        </button>
      </div>
    </div>
  );
};
