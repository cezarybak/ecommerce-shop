import { useProducts } from 'hooks';
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
  const [isModelOpen, setModelOpen] = useState<number | null>(null);
  const { isLoading, productList } = useProducts();

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
          product={productList?.items.find((e) => e.id === isModelOpen)}
          isModelOpen={isModelOpen}
          setModelOpen={setModelOpen}
        />
      )}
    </main>
  );
};
