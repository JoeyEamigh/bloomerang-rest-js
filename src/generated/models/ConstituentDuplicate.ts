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
 * Validation note - If Type is "Organization", OrganizationName is required.  If Type is "Individual", FirstName and LastName are required.
 * @export
 * @interface ConstituentDuplicate
 */
export interface ConstituentDuplicate {
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    type?: ConstituentDuplicateTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    organizationName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentDuplicate
     */
    emailAddress?: string;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentDuplicateTypeEnum {
    Individual = 'Individual',
    Organization = 'Organization'
}


/**
 * Check if a given object implements the ConstituentDuplicate interface.
 */
export function instanceOfConstituentDuplicate(value: object): value is ConstituentDuplicate {
    return true;
}

export function ConstituentDuplicateFromJSON(json: any): ConstituentDuplicate {
    return ConstituentDuplicateFromJSONTyped(json, false);
}

export function ConstituentDuplicateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentDuplicate {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['Type'] == null ? undefined : json['Type'],
        'firstName': json['FirstName'] == null ? undefined : json['FirstName'],
        'lastName': json['LastName'] == null ? undefined : json['LastName'],
        'organizationName': json['OrganizationName'] == null ? undefined : json['OrganizationName'],
        'street': json['Street'] == null ? undefined : json['Street'],
        'phoneNumber': json['PhoneNumber'] == null ? undefined : json['PhoneNumber'],
        'emailAddress': json['EmailAddress'] == null ? undefined : json['EmailAddress'],
    };
}

export function ConstituentDuplicateToJSON(json: any): ConstituentDuplicate {
    return ConstituentDuplicateToJSONTyped(json, false);
}

export function ConstituentDuplicateToJSONTyped(value?: ConstituentDuplicate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Type': value['type'],
        'FirstName': value['firstName'],
        'LastName': value['lastName'],
        'OrganizationName': value['organizationName'],
        'Street': value['street'],
        'PhoneNumber': value['phoneNumber'],
        'EmailAddress': value['emailAddress'],
    };
}

export const ConstituentDuplicatePropertyValidationAttributesMap: {
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

