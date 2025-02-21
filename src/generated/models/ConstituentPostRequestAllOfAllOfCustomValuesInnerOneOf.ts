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
 * @interface ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf
 */
export interface ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf {
    /**
     * 
     * @type {number}
     * @memberof ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf
     */
    fieldId?: number;
    /**
     * The value to assign; null clears the field
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf
     */
    value?: string;
}

/**
 * Check if a given object implements the ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf interface.
 */
export function instanceOfConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf(value: object): value is ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf {
    return true;
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSON(json: any): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf {
    return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldId': json['FieldId'] == null ? undefined : json['FieldId'],
        'value': json['Value'] == null ? undefined : json['Value'],
    };
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfToJSON(json: any): ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf {
    return ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfToJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfToJSONTyped(value?: ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FieldId': value['fieldId'],
        'Value': value['value'],
    };
}

export const ConstituentPostRequestAllOfAllOfCustomValuesInnerOneOfPropertyValidationAttributesMap: {
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

