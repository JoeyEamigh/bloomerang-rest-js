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
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValue } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValue';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValue';

/**
 * 
 * @export
 * @interface MultipleValueAssignments
 */
export interface MultipleValueAssignments {
    /**
     * 
     * @type {number}
     * @memberof MultipleValueAssignments
     */
    fieldId?: number;
    /**
     * 
     * @type {Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValue>}
     * @memberof MultipleValueAssignments
     */
    values?: Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValue>;
}

/**
 * Check if a given object implements the MultipleValueAssignments interface.
 */
export function instanceOfMultipleValueAssignments(value: object): value is MultipleValueAssignments {
    return true;
}

export function MultipleValueAssignmentsFromJSON(json: any): MultipleValueAssignments {
    return MultipleValueAssignmentsFromJSONTyped(json, false);
}

export function MultipleValueAssignmentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultipleValueAssignments {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldId': json['FieldId'] == null ? undefined : json['FieldId'],
        'values': json['Values'] == null ? undefined : ((json['Values'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueFromJSON)),
    };
}

export function MultipleValueAssignmentsToJSON(json: any): MultipleValueAssignments {
    return MultipleValueAssignmentsToJSONTyped(json, false);
}

export function MultipleValueAssignmentsToJSONTyped(value?: MultipleValueAssignments | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FieldId': value['fieldId'],
        'Values': value['values'] == null ? undefined : ((value['values'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerOneOfValueToJSON)),
    };
}

export const MultipleValueAssignmentsPropertyValidationAttributesMap: {
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

