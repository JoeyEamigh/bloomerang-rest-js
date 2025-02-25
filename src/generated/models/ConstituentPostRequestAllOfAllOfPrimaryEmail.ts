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
 * Primary email address
 * @export
 * @interface ConstituentPostRequestAllOfAllOfPrimaryEmail
 */
export interface ConstituentPostRequestAllOfAllOfPrimaryEmail {
    /**
     * 
     * @type {number}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    type?: ConstituentPostRequestAllOfAllOfPrimaryEmailTypeEnum;
    /**
     * The email address
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    value?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConstituentPostRequestAllOfAllOfPrimaryEmail
     */
    isBad?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentPostRequestAllOfAllOfPrimaryEmailTypeEnum {
    Home = 'Home',
    Work = 'Work'
}


/**
 * Check if a given object implements the ConstituentPostRequestAllOfAllOfPrimaryEmail interface.
 */
export function instanceOfConstituentPostRequestAllOfAllOfPrimaryEmail(value: object): value is ConstituentPostRequestAllOfAllOfPrimaryEmail {
    return true;
}

export function ConstituentPostRequestAllOfAllOfPrimaryEmailFromJSON(json: any): ConstituentPostRequestAllOfAllOfPrimaryEmail {
    return ConstituentPostRequestAllOfAllOfPrimaryEmailFromJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfPrimaryEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentPostRequestAllOfAllOfPrimaryEmail {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'value': json['Value'] == null ? undefined : json['Value'],
        'isPrimary': json['IsPrimary'] == null ? undefined : json['IsPrimary'],
        'isBad': json['IsBad'] == null ? undefined : json['IsBad'],
    };
}

export function ConstituentPostRequestAllOfAllOfPrimaryEmailToJSON(json: any): ConstituentPostRequestAllOfAllOfPrimaryEmail {
    return ConstituentPostRequestAllOfAllOfPrimaryEmailToJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfPrimaryEmailToJSONTyped(value?: ConstituentPostRequestAllOfAllOfPrimaryEmail | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'AccountId': value['accountId'],
        'Type': value['type'],
        'Value': value['value'],
        'IsPrimary': value['isPrimary'],
        'IsBad': value['isBad'],
    };
}

export const ConstituentPostRequestAllOfAllOfPrimaryEmailPropertyValidationAttributesMap: {
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

