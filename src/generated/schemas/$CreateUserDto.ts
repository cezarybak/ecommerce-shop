/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateUserDto = {
    properties: {
        username: {
            type: 'string',
            isRequired: true,
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        avatar: {
            type: 'string',
        },
    },
} as const;