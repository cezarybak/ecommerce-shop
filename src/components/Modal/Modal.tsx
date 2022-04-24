import { ProductDto } from 'generated';
import { Dispatch, SetStateAction } from 'react';
import { ReactComponent as CloseIcon } from 'assets/svgIcons/closeIcon.svg';
import { ReactPortal } from 'providers';

import './style.scss';

type Props = {
  isModelOpen: number | null;
  setModelOpen: Dispatch<SetStateAction<number | null>>;
  product: ProductDto | undefined;
};

export const Modal = ({ setModelOpen, product }: Props) => {
  const { description, name, image } = product!;

  return (
    <ReactPortal wrapperId="modal-container">
      <div className="modal">
        <div className="modal-content">
          <div className="image-wraper">
            <CloseIcon className="icon" onClick={() => setModelOpen(null)} />
            <img src={image} />
          </div>
          <div className="content-wraper">
            <h2>{name}</h2>
            <span>{description}</span>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
