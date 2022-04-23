import React from "react";
import { Link } from "react-router-dom";

import { AppRoute } from "components/routing/AppRoute.enum";

export const Products = () => {
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.Login}> Login </Link>
    </>
  );
};
