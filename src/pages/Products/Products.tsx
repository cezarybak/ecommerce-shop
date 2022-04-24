import { useEffect, useState } from 'react';
import { ProductDto, ProductsService } from 'generated';
import { useSearchContext } from 'hooks/useSerachContext';
import { Pagination, Header, Element, Modal } from 'components';
import useDebounce from 'hooks/useDebounce';

import './style.scss';

type ProductListType = { items: ProductDto[]; totalPageCount: number };

export const Products = () => {
  const [isLoading, setLoading] = useState(false);
  const [productList, setProducts] = useState<ProductListType | undefined>(
    undefined,
  );
  const [isModelOpen, setModelOpen] = useState<number | null>(null);

  const { search, isActive, isPromo, page } = useSearchContext();

  const debounceSearchTerm = useDebounce(search, 600);

  useEffect(() => {
    setLoading(true);
    ProductsService.productControllerFindAll(
      debounceSearchTerm,
      8,
      page,
      isPromo,
      isActive,
    ).then((e) => {
      setLoading(false);
      setProducts({ items: e.items, totalPageCount: e.meta.totalPages });
    });
  }, [debounceSearchTerm, isActive, isPromo, page]);

  if (!productList) {
    return <div>Halasasasasasko</div>;
  }

  return (
    <main className="product-page">
      <Header />
      <div className="list">
        {productList.items.map((item) => (
          <Element key={item.id} {...item} setModelOpen={setModelOpen} />
        ))}
      </div>
      <Pagination totalPageCount={productList.totalPageCount} />
      {!!isModelOpen && (
        <Modal
          product={productList.items.find((e) => e.id === isModelOpen)}
          isModelOpen={isModelOpen}
          setModelOpen={setModelOpen}
        />
      )}
    </main>
  );
};
