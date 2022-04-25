import { useCickOutSide, useProducts } from 'hooks';
import {
  Pagination,
  Header,
  Element,
  Modal,
  Spiner,
  EmptyElement,
} from 'components';

import './style.scss';
import { useState } from 'react';

export const Products = () => {
  const [isModelOpen, setModelOpen] = useState<number | boolean>(false);
  const { isLoading, productList } = useProducts();
  const { ref } = useCickOutSide(isModelOpen, setModelOpen);

  return (
    <main className="product-page">
      <Header />
      {isLoading ? (
        <Spiner />
      ) : (
        <>
          <div className="list">
            {!productList ? (
              <EmptyElement />
            ) : (
              productList.items.map((item) => (
                <Element key={item.id} {...item} setModelOpen={setModelOpen} />
              ))
            )}
          </div>
          <Pagination totalPageCount={productList?.totalPageCount} />
        </>
      )}
      {!!isModelOpen && (
        <Modal
          ref={ref}
          product={productList?.items.find((e) => e.id === isModelOpen)}
          isModelOpen={isModelOpen}
          setModelOpen={setModelOpen}
        />
      )}
    </main>
  );
};
