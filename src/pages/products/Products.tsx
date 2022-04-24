import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'components/Routing/AppRoute.enum';
import { ProductDto, ProductsService } from 'generated';
import { Header } from 'components/Header/Header';

export const Products = () => {
  const [isLoading, setLoading] = useState(false);
  const [productList, setProducts] = useState<ProductDto[] | []>([]);

  const getProducts = async () => {
    ProductsService.productControllerFindAll('', 8, 2, true, false).then((e) =>
      setProducts(e.items),
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
    </>
  );
};
