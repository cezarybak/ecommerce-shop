/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProductDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
        },
        description: {
            type: 'string',
            isRequired: true,
        },
        rating: {
            type: 'number',
            description: `The rating of product - number of stars from 0 to 5`,
            isRequired: true,
            maximum: 5,
        },
        image: {
            type: 'string',
            isRequired: true,
        },
        promo: {
            type: 'boolean',
            isRequired: true,
        },
        active: {
            type: 'boolean',
            isRequired: true,
        },
    },
} as const;