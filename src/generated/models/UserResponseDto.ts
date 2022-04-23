/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginateLinksDto } from './PaginateLinksDto';
import type { PaginateMetaDto } from './PaginateMetaDto';
import type { UserDto } from './UserDto';

export type UserResponseDto = {
    items: Array<UserDto>;
    meta: PaginateMetaDto;
    links: PaginateLinksDto;
};
