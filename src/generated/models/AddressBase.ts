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
 * @interface AddressBase
 */
export interface AddressBase {
    /**
     * 
     * @type {number}
     * @memberof AddressBase
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof AddressBase
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    type?: AddressBaseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    city?: string;
    /**
     * Must match a state in the Bloomerang CRM
     * @type {string}
     * @memberof AddressBase
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    postalCode?: string;
    /**
     * Must match a state in the Bloomerang CRM
     * @type {string}
     * @memberof AddressBase
     */
    country?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddressBase
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressBase
     */
    isBad?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum AddressBaseTypeEnum {
    Home = 'Home',
    Vacation = 'Vacation',
    Work = 'Work'
}


/**
 * Check if a given object implements the AddressBase interface.
 */
export function instanceOfAddressBase(value: object): value is AddressBase {
    return true;
}

export function AddressBaseFromJSON(json: any): AddressBase {
    return AddressBaseFromJSONTyped(json, false);
}

export function AddressBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBase {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'street': json['Street'] == null ? undefined : json['Street'],
        'city': json['City'] == null ? undefined : json['City'],
        'state': json['State'] == null ? undefined : json['State'],
        'postalCode': json['PostalCode'] == null ? undefined : json['PostalCode'],
        'country': json['Country'] == null ? undefined : json['Country'],
        'isPrimary': json['IsPrimary'] == null ? undefined : json['IsPrimary'],
        'isBad': json['IsBad'] == null ? undefined : json['IsBad'],
    };
}

export function AddressBaseToJSON(json: any): AddressBase {
    return AddressBaseToJSONTyped(json, false);
}

export function AddressBaseToJSONTyped(value?: AddressBase | null, ignoreDiscriminator: boolean = false): any {
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

export const AddressBasePropertyValidationAttributesMap: {
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

