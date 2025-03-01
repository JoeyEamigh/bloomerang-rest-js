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
 * @interface RelationshipIdDelete201Response
 */
export interface RelationshipIdDelete201Response {
    /**
     * The ID of the object that was deleted
     * @type {number}
     * @memberof RelationshipIdDelete201Response
     */
    id?: number;
    /**
     * The type of object that was deleted
     * @type {string}
     * @memberof RelationshipIdDelete201Response
     */
    type?: string;
    /**
     * True if the object was deleted
     * @type {boolean}
     * @memberof RelationshipIdDelete201Response
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the RelationshipIdDelete201Response interface.
 */
export function instanceOfRelationshipIdDelete201Response(value: object): value is RelationshipIdDelete201Response {
    return true;
}

export function RelationshipIdDelete201ResponseFromJSON(json: any): RelationshipIdDelete201Response {
    return RelationshipIdDelete201ResponseFromJSONTyped(json, false);
}

export function RelationshipIdDelete201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipIdDelete201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'deleted': json['Deleted'] == null ? undefined : json['Deleted'],
    };
}

export function RelationshipIdDelete201ResponseToJSON(json: any): RelationshipIdDelete201Response {
    return RelationshipIdDelete201ResponseToJSONTyped(json, false);
}

export function RelationshipIdDelete201ResponseToJSONTyped(value?: RelationshipIdDelete201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Type': value['type'],
        'Deleted': value['deleted'],
    };
}

export const RelationshipIdDelete201ResponsePropertyValidationAttributesMap: {
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

