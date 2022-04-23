/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginateLinksDto } from './PaginateLinksDto';
import type { PaginateMetaDto } from './PaginateMetaDto';
import type { ProductDto } from './ProductDto';

export type ProductResponseDto = {
    items: Array<ProductDto>;
    meta: PaginateMetaDto;
    links: PaginateLinksDto;
};
