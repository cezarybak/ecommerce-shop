/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProductResponseDto = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'ProductDto',
            },
            isRequired: true,
        },
        meta: {
            type: 'PaginateMetaDto',
            isRequired: true,
        },
        links: {
            type: 'PaginateLinksDto',
            isRequired: true,
        },
    },
} as const;