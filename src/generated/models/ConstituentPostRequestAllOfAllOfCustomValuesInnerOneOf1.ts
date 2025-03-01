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
 * @interface ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1
 */
export interface ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 {
    /**
     * 
     * @type {number}
     * @memberof ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1
     */
    fieldId?: number;
    /**
     * The ID of the pick value to assign; null clears the field
     * @type {number}
     * @memberof ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1
     */
    valueId?: number;
}

/**
 * Check if a given object implements the ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 interface.
 */
export function instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1(value: object): value is ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 {
    return true;
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSON(json: any): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 {
    return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldId': json['FieldId'] == null ? undefined : json['FieldId'],
        'valueId': json['ValueId'] == null ? undefined : json['ValueId'],
    };
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1ToJSON(json: any): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 {
    return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1ToJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1ToJSONTyped(value?: ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FieldId': value['fieldId'],
        'ValueId': value['valueId'],
    };
}

export const ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf1PropertyValidationAttributesMap: {
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

