/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserDto } from './UserDto';

export type LoginResponseDto = {
    user: UserDto;
    expiresIn: string;
    access_token: string;
};
