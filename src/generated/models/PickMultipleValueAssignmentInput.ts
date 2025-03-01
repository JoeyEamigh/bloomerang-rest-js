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
 * @interface PickMultipleValueAssignmentInput
 */
export interface PickMultipleValueAssignmentInput {
    /**
     * 
     * @type {number}
     * @memberof PickMultipleValueAssignmentInput
     */
    fieldId?: number;
    /**
     * The ID of the pick value to assign; an empty array clears the field
     * @type {Array<number>}
     * @memberof PickMultipleValueAssignmentInput
     */
    valueIds?: Array<number>;
}

/**
 * Check if a given object implements the PickMultipleValueAssignmentInput interface.
 */
export function instanceOfPickMultipleValueAssignmentInput(value: object): value is PickMultipleValueAssignmentInput {
    return true;
}

export function PickMultipleValueAssignmentInputFromJSON(json: any): PickMultipleValueAssignmentInput {
    return PickMultipleValueAssignmentInputFromJSONTyped(json, false);
}

export function PickMultipleValueAssignmentInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): PickMultipleValueAssignmentInput {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldId': json['FieldId'] == null ? undefined : json['FieldId'],
        'valueIds': json['ValueIds'] == null ? undefined : json['ValueIds'],
    };
}

export function PickMultipleValueAssignmentInputToJSON(json: any): PickMultipleValueAssignmentInput {
    return PickMultipleValueAssignmentInputToJSONTyped(json, false);
}

export function PickMultipleValueAssignmentInputToJSONTyped(value?: PickMultipleValueAssignmentInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FieldId': value['fieldId'],
        'ValueIds': value['valueIds'],
    };
}

export const PickMultipleValueAssignmentInputPropertyValidationAttributesMap: {
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

