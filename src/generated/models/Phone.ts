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
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {number}
     * @memberof Phone
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof Phone
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    type?: PhoneTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    extension?: string;
    /**
     * The phone number including formatting but not the extension
     * @type {string}
     * @memberof Phone
     */
    number?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Phone
     */
    isPrimary?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum PhoneTypeEnum {
    Home = 'Home',
    Work = 'Work',
    Mobile = 'Mobile',
    Fax = 'Fax'
}


/**
 * Check if a given object implements the Phone interface.
 */
export function instanceOfPhone(value: object): value is Phone {
    return true;
}

export function PhoneFromJSON(json: any): Phone {
    return PhoneFromJSONTyped(json, false);
}

export function PhoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): Phone {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'extension': json['Extension'] == null ? undefined : json['Extension'],
        'number': json['Number'] == null ? undefined : json['Number'],
        'isPrimary': json['IsPrimary'] == null ? undefined : json['IsPrimary'],
    };
}

export function PhoneToJSON(json: any): Phone {
    return PhoneToJSONTyped(json, false);
}

export function PhoneToJSONTyped(value?: Phone | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'AccountId': value['accountId'],
        'Type': value['type'],
        'Extension': value['extension'],
        'Number': value['number'],
        'IsPrimary': value['isPrimary'],
    };
}

export const PhonePropertyValidationAttributesMap: {
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

