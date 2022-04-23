/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserResponseDto = {
    properties: {
        items: {
            type: 'array',
            contains: {
                type: 'UserDto',
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