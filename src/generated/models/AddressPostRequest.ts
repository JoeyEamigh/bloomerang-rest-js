/* tslint:disable */
/* eslint-disable */
/**
 * Bloomerang API
 * Private-key API for Bloomerang CRM
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@bloomerang.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AddressPostRequest
 */
export interface AddressPostRequest {
    /**
     * 
     * @type {number}
     * @memberof AddressPostRequest
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof AddressPostRequest
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressPostRequest
     */
    type: AddressPostRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressPostRequest
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressPostRequest
     */
    city?: string;
    /**
     * Must match a state in the Bloomerang CRM
     * @type {string}
     * @memberof AddressPostRequest
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressPostRequest
     */
    postalCode?: string;
    /**
     * Must match a state in the Bloomerang CRM
     * @type {string}
     * @memberof AddressPostRequest
     */
    country: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddressPostRequest
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressPostRequest
     */
    isBad?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum AddressPostRequestTypeEnum {
    Home = 'Home',
    Vacation = 'Vacation',
    Work = 'Work'
}


/**
 * Check if a given object implements the AddressPostRequest interface.
 */
export function instanceOfAddressPostRequest(value: object): value is AddressPostRequest {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    return true;
}

export function AddressPostRequestFromJSON(json: any): AddressPostRequest {
    return AddressPostRequestFromJSONTyped(json, false);
}

export function AddressPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'type': json['Type'],
        'street': json['Street'] == null ? undefined : json['Street'],
        'city': json['City'] == null ? undefined : json['City'],
        'state': json['State'] == null ? undefined : json['State'],
        'postalCode': json['PostalCode'] == null ? undefined : json['PostalCode'],
        'country': json['Country'],
        'isPrimary': json['IsPrimary'] == null ? undefined : json['IsPrimary'],
        'isBad': json['IsBad'] == null ? undefined : json['IsBad'],
    };
}

export function AddressPostRequestToJSON(json: any): AddressPostRequest {
    return AddressPostRequestToJSONTyped(json, false);
}

export function AddressPostRequestToJSONTyped(value?: AddressPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'AccountId': value['accountId'],
        'Type': value['type'],
        'Street': value['street'],
        'City': value['city'],
        'State': value['state'],
        'PostalCode': value['postalCode'],
        'Country': value['country'],
        'IsPrimary': value['isPrimary'],
        'IsBad': value['isBad'],
    };
}

export const AddressPostRequestPropertyValidationAttributesMap: {
    [property: string]: {
        maxLength?: number,
        minLength?: number,
        pattern?: string,
        maximum?: number,
        exclusiveMaximum?: boolean,
        minimum?: number,
        exclusiveMinimum?: boolean,
        multipleOf?: number,
        maxItems?: number,
        minItems?: number,
        uniqueItems?: boolean
    }
} = {
}

