import { ProductDto, ProductsService } from 'generated';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { useSearchContext } from './useSerachContext';

type ProductListType = { items: ProductDto[]; totalPageCount: number };

export const useProducts = () => {
  const [isLoading, setLoading] = useState(false);
  const [productList, setProducts] = useState<ProductListType | undefined>(
    undefined,
  );

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

  return {
    productList,
    isLoading,
  };
};
