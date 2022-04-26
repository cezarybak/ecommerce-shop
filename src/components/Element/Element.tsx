import { ReactComponent as StarOffIcon } from 'assets/svgIcons/starOffIcon.svg';
import { ReactComponent as StarOnIcon } from 'assets/svgIcons/starOnIcon.svg';
import { Button } from 'components';
import { Badge } from 'components/Badge/Badge';
import { ProductDto } from 'generated';
import { Dispatch, SetStateAction } from 'react';

import './style.scss';

type Props = ProductDto & {
  setModelOpen: Dispatch<SetStateAction<number | boolean>>;
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

  return (
    <div className="element">
      <div className="image-wraper">
        {!!promo && <Badge>Promo</Badge>}
        <img src={image} alt={`${id}-product-image`} />
      </div>
      <div className="content-wraper">
        <div className="top-wraper">
          <h3>{name}</h3>
          <span>{description}</span>
        </div>
        <div className="bottom-wraper">
          <div>
            {ratingMap.map((e, index) =>
              e ? (
                <StarOnIcon className="star-icon" key={index} />
              ) : (
                <StarOffIcon className="star-icon" key={index} />
              ),
            )}
          </div>
          <Button
            value={active ? 'Unavailable' : 'Show details'}
            type="button"
            bg="purple"
            disabled={active}
            onClick={() => setModelOpen(id)}
          />
        </div>
      </div>
    </div>
  );
};
