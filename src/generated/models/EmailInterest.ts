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
 * @interface EmailInterest
 */
export interface EmailInterest {
    /**
     * 
     * @type {number}
     * @memberof EmailInterest
     */
    id?: number;
    /**
     * Is this an email interest for Bloomerang donor surveys?
     * @type {boolean}
     * @memberof EmailInterest
     */
    isSurveyEmailInterest?: boolean;
    /**
     * 
     * @type {number}
     * @memberof EmailInterest
     */
    sortIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailInterest
     */
    name?: string;
    /**
     * Is this the default?
     * @type {boolean}
     * @memberof EmailInterest
     */
    isDefault?: boolean;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof EmailInterest
     */
    isActive?: boolean;
}

/**
 * Check if a given object implements the EmailInterest interface.
 */
export function instanceOfEmailInterest(value: object): value is EmailInterest {
    return true;
}

export function EmailInterestFromJSON(json: any): EmailInterest {
    return EmailInterestFromJSONTyped(json, false);
}

export function EmailInterestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailInterest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'isSurveyEmailInterest': json['IsSurveyEmailInterest'] == null ? undefined : json['IsSurveyEmailInterest'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'isDefault': json['IsDefault'] == null ? undefined : json['IsDefault'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
    };
}

export function EmailInterestToJSON(json: any): EmailInterest {
    return EmailInterestToJSONTyped(json, false);
}

export function EmailInterestToJSONTyped(value?: EmailInterest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'IsSurveyEmailInterest': value['isSurveyEmailInterest'],
        'SortIndex': value['sortIndex'],
        'Name': value['name'],
        'IsDefault': value['isDefault'],
        'IsActive': value['isActive'],
    };
}

export const EmailInterestPropertyValidationAttributesMap: {
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

