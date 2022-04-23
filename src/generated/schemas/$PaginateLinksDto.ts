/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginateLinksDto = {
    properties: {
        first: {
            type: 'string',
            isRequired: true,
        },
        previous: {
            type: 'string',
            isRequired: true,
        },
        next: {
            type: 'string',
            isRequired: true,
        },
        last: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;