import { ProductDto } from 'generated';
import { Dispatch, RefObject, SetStateAction } from 'react';
import { ReactComponent as CloseIcon } from 'assets/svgIcons/closeIcon.svg';
import { ReactPortal } from 'providers';

import './style.scss';

type Props = {
  isModelOpen: number | boolean;
  setModelOpen: Dispatch<SetStateAction<number | boolean>>;
  product: ProductDto | undefined;
  ref: RefObject<HTMLDivElement>;
};

export const Modal = ({ setModelOpen, product, ref }: Props) => {
  const { description, name, image } = product!;

  return (
    <ReactPortal wrapperId="modal-container">
      <div ref={ref} className="modal">
        <div className="modal-content">
          <div className="image-wraper">
            <CloseIcon className="icon" onClick={() => setModelOpen(false)} />
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
