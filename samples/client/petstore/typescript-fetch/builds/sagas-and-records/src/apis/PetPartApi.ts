/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    GetMatchingPartsResponse,
    GetMatchingPartsResponseFromJSON,
    GetMatchingPartsResponseToJSON,
    GetPetPartTypeResponse,
    GetPetPartTypeResponseFromJSON,
    GetPetPartTypeResponseToJSON,
} from '../models';

export interface GetFakePetPartTypeRequest {
    fakePetPartId: number;
}

export interface GetMatchingPartsRequest {
    fakePetPartId: number;
    _long: boolean;
    smooth: boolean;
    _short: boolean;
    name?: string;
    connectedPart?: string;
}

/**
 * 
 */
export class PetPartApi extends runtime.BaseAPI {

    /**
     * Returns single pet part type for the petPart id.
     */
    async getFakePetPartTypeRaw(requestParameters: GetFakePetPartTypeRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GetPetPartTypeResponse>> {
        if (requestParameters.fakePetPartId === null || requestParameters.fakePetPartId === undefined) {
            throw new runtime.RequiredError('fakePetPartId','Required parameter requestParameters.fakePetPartId was null or undefined when calling getFakePetPartType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake_petParts/{fake_petPart-id}/part-type`.replace(`{${"fake_petPart-id"}}`, encodeURIComponent(String(requestParameters.fakePetPartId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPetPartTypeResponseFromJSON(jsonValue));
    }

    /**
     * Returns single pet part type for the petPart id.
     */
    async getFakePetPartType(fakePetPartId: number, initOverrides?: RequestInit): Promise<GetPetPartTypeResponse> {
        const response = await this.getFakePetPartTypeRaw({ fakePetPartId: fakePetPartId }, initOverrides);
        return await response.value();
    }

    /**
     * Get the matching parts for the given pet part.
     */
    async getMatchingPartsRaw(requestParameters: GetMatchingPartsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GetMatchingPartsResponse>> {
        if (requestParameters.fakePetPartId === null || requestParameters.fakePetPartId === undefined) {
            throw new runtime.RequiredError('fakePetPartId','Required parameter requestParameters.fakePetPartId was null or undefined when calling getMatchingParts.');
        }

        if (requestParameters._long === null || requestParameters._long === undefined) {
            throw new runtime.RequiredError('_long','Required parameter requestParameters._long was null or undefined when calling getMatchingParts.');
        }

        if (requestParameters.smooth === null || requestParameters.smooth === undefined) {
            throw new runtime.RequiredError('smooth','Required parameter requestParameters.smooth was null or undefined when calling getMatchingParts.');
        }

        if (requestParameters._short === null || requestParameters._short === undefined) {
            throw new runtime.RequiredError('_short','Required parameter requestParameters._short was null or undefined when calling getMatchingParts.');
        }

        const queryParameters: any = {};

        if (requestParameters._long !== undefined) {
            queryParameters['long'] = requestParameters._long;
        }

        if (requestParameters.smooth !== undefined) {
            queryParameters['smooth'] = requestParameters.smooth;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.connectedPart !== undefined) {
            queryParameters['connected-part'] = requestParameters.connectedPart;
        }

        if (requestParameters._short !== undefined) {
            queryParameters['short'] = requestParameters._short;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fake_petParts/{fake_petPart-id}/matching-parts`.replace(`{${"fake_petPart-id"}}`, encodeURIComponent(String(requestParameters.fakePetPartId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetMatchingPartsResponseFromJSON(jsonValue));
    }

    /**
     * Get the matching parts for the given pet part.
     */
    async getMatchingParts(fakePetPartId: number, , _long: boolean, , smooth: boolean, , _short: boolean, , name?: string, , connectedPart?: string, initOverrides?: RequestInit): Promise<GetMatchingPartsResponse> {
        const response = await this.getMatchingPartsRaw({ fakePetPartId: fakePetPartId, _long: _long, smooth: smooth, _short: _short, name: name, connectedPart: connectedPart }, initOverrides);
        return await response.value();
    }

}
