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
 * @interface ManagedValueNoDefault
 */
export interface ManagedValueNoDefault {
    /**
     * 
     * @type {string}
     * @memberof ManagedValueNoDefault
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ManagedValueNoDefault
     */
    sortIndex?: number;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof ManagedValueNoDefault
     */
    isActive?: boolean;
}

/**
 * Check if a given object implements the ManagedValueNoDefault interface.
 */
export function instanceOfManagedValueNoDefault(value: object): value is ManagedValueNoDefault {
    return true;
}

export function ManagedValueNoDefaultFromJSON(json: any): ManagedValueNoDefault {
    return ManagedValueNoDefaultFromJSONTyped(json, false);
}

export function ManagedValueNoDefaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedValueNoDefault {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['Name'] == null ? undefined : json['Name'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
    };
}

export function ManagedValueNoDefaultToJSON(json: any): ManagedValueNoDefault {
    return ManagedValueNoDefaultToJSONTyped(json, false);
}

export function ManagedValueNoDefaultToJSONTyped(value?: ManagedValueNoDefault | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Name': value['name'],
        'SortIndex': value['sortIndex'],
        'IsActive': value['isActive'],
    };
}

export const ManagedValueNoDefaultPropertyValidationAttributesMap: {
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

