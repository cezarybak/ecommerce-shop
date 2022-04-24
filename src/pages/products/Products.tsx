import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductDto, ProductsService } from 'generated';
import { useSearchContext } from 'hooks/useSerachContext';
import { Pagination, Header } from 'components';
import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  const [isLoading, setLoading] = useState(false);
  const [productList, setProducts] = useState<
    { items: ProductDto[]; totalPageCount: number } | undefined
  >(undefined);
  const { search, isActive, isPromo, page } = useSearchContext();

  useEffect(() => {
    setLoading(true);
    ProductsService.productControllerFindAll(
      search,
      8,
      page,
      isPromo,
      isActive,
    ).then((e) => {
      setLoading(false);
      setProducts({ items: e.items, totalPageCount: e.meta.totalPages });
    });
  }, [search, isActive, isPromo, page]);

  if (!productList) {
    return <div>Halasasasasasko</div>;
  }

  return (
    <div>
      <Header />
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
      {!!isLoading && <div>Haloszkas</div>}
      <div>
        {productList.items.map(
          ({ id, description, image, active, name, promo, rating }) => (
            <div key={id}>{description}</div>
          ),
        )}
      </div>
      {/* <Pagination /> */}
      <div>{productList.totalPageCount}</div>
    </div>
  );
};
