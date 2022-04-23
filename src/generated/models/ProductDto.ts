/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductDto = {
    id: number;
    name: string;
    description: string;
    /**
     * The rating of product - number of stars from 0 to 5
     */
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
};
