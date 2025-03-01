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
 * @interface ManagedValueInput
 */
export interface ManagedValueInput {
    /**
     * 
     * @type {string}
     * @memberof ManagedValueInput
     */
    name?: string;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof ManagedValueInput
     */
    isActive?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ManagedValueInput
     */
    sortIndex?: number;
}

/**
 * Check if a given object implements the ManagedValueInput interface.
 */
export function instanceOfManagedValueInput(value: object): value is ManagedValueInput {
    return true;
}

export function ManagedValueInputFromJSON(json: any): ManagedValueInput {
    return ManagedValueInputFromJSONTyped(json, false);
}

export function ManagedValueInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedValueInput {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['Name'] == null ? undefined : json['Name'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
    };
}

export function ManagedValueInputToJSON(json: any): ManagedValueInput {
    return ManagedValueInputToJSONTyped(json, false);
}

export function ManagedValueInputToJSONTyped(value?: ManagedValueInput | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['name'],
        'IsActive': value['isActive'],
        'SortIndex': value['sortIndex'],
    };
}

export const ManagedValueInputPropertyValidationAttributesMap: {
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

