/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginateMetaDto = {
    properties: {
        itemCount: {
            type: 'number',
            isRequired: true,
        },
        totalItems: {
            type: 'number',
            isRequired: true,
        },
        itemsPerPage: {
            type: 'number',
            isRequired: true,
        },
        totalPages: {
            type: 'number',
            isRequired: true,
        },
        currentPage: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;