/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ProductFakerDto = {
    properties: {
        count: {
            type: 'number',
            isRequired: true,
            maximum: 1000,
            minimum: 1,
        },
        clear: {
            type: 'boolean',
            isRequired: true,
        },
    },
} as const;