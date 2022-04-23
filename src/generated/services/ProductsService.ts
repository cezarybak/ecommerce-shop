/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProductDto } from "../models/CreateProductDto";
import type { ProductDto } from "../models/ProductDto";
import type { ProductFakerDto } from "../models/ProductFakerDto";
import type { ProductResponseDto } from "../models/ProductResponseDto";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ProductsService {
  /**
   * @param search Search phrase
   * @param limit Limit number of products per page
   * @param page Page number
   * @param promo Filter products with or without promotion
   * @param active Filter active and non-active products
   * @returns ProductResponseDto
   * @throws ApiError
   */
  public static productControllerFindAll(
    search?: string,
    limit?: number,
    page?: number,
    promo?: boolean,
    active?: boolean
  ): CancelablePromise<ProductResponseDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/products",
      query: {
        search: search,
        limit: limit,
        page: page,
        promo: promo,
        active: active,
      },
    });
  }

  /**
   * @param requestBody
   * @returns ProductDto
   * @throws ApiError
   */
  public static productControllerCreate(
    requestBody: CreateProductDto
  ): CancelablePromise<ProductDto> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/products",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad request`,
      },
    });
  }

  /**
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static productControllerUpdate(
    requestBody: ProductDto
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/products",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        404: `Not found`,
      },
    });
  }

  /**
   * @param id
   * @returns ProductDto
   * @throws ApiError
   */
  public static productControllerFind(
    id: number
  ): CancelablePromise<ProductDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/products/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Not found`,
      },
    });
  }

  /**
   * @param id
   * @returns void
   * @throws ApiError
   */
  public static productControllerDelete(id: number): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/products/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Not found`,
      },
    });
  }

  /**
   * @param requestBody
   * @returns any Command result OK
   * @throws ApiError
   */
  public static productControllerFaker(
    requestBody: ProductFakerDto
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/products/faker",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
