/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserDto = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        username: {
            type: 'string',
            isRequired: true,
        },
        avatar: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;