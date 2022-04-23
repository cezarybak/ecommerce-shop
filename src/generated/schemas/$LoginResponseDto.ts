/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginResponseDto = {
    properties: {
        user: {
            type: 'UserDto',
            isRequired: true,
        },
        expiresIn: {
            type: 'string',
            isRequired: true,
        },
        access_token: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;