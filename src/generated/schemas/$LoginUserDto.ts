/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginUserDto = {
    properties: {
        username: {
            type: 'string',
            isRequired: true,
        },
        password: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;