/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { LoginResponseDto } from '../models/LoginResponseDto';
import type { LoginUserDto } from '../models/LoginUserDto';
import type { UserDto } from '../models/UserDto';
import type { UserResponseDto } from '../models/UserResponseDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * @param requestBody
     * @returns LoginResponseDto
     * @throws ApiError
     */
    public static appControllerLogin(
        requestBody: LoginUserDto,
    ): CancelablePromise<LoginResponseDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @returns UserDto
     * @throws ApiError
     */
    public static appControllerGetProfile(): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * @param id
     * @returns UserDto
     * @throws ApiError
     */
    public static usersControllerFindOne(
        id: number,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not found`,
            },
        });
    }

    /**
     * @returns UserResponseDto
     * @throws ApiError
     */
    public static usersControllerFindAll(): CancelablePromise<UserResponseDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }

    /**
     * @param requestBody
     * @returns UserDto
     * @throws ApiError
     */
    public static usersControllerCreate(
        requestBody: CreateUserDto,
    ): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

}