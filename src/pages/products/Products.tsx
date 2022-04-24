import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from 'components/Routing/AppRoute.enum';
import { ProductDto, ProductsService } from 'generated';
import { Header } from 'components/Header/Header';
import { useSearchContext } from 'hooks/useSerachContext';

export const Products = () => {
  const [isLoading, setLoading] = useState(false);
  const [productList, setProducts] = useState<ProductDto[] | []>([]);

  const { search, isActive, isPromo, page } = useSearchContext();

  const getProducts = async () => {
    setLoading(true);
    ProductsService.productControllerFindAll(
      search,
      8,
      page,
      isPromo,
      isActive,
    ).then((e) => {
      setLoading(false);
      setProducts(e.items);
    });
  };

  useEffect(() => {
    getProducts();
  }, [search, isActive, isPromo, page]);

  return (
    <>
      <Header />
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
      {!!isLoading && <div>Haloszkas</div>}
      <div>
        {productList.map(
          ({ id, description, image, active, name, promo, rating }) => (
            <div key={id}>{description}</div>
          ),
        )}
      </div>
    </>
  );
};
