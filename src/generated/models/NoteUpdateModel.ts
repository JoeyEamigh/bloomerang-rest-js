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
 * @interface NoteUpdateModel
 */
export interface NoteUpdateModel {
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof NoteUpdateModel
     */
    accountId?: number;
    /**
     * 
     * @type {Date}
     * @memberof NoteUpdateModel
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof NoteUpdateModel
     */
    note?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof NoteUpdateModel
     */
    customValues?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof NoteUpdateModel
     */
    attachments?: Array<object>;
}

/**
 * Check if a given object implements the NoteUpdateModel interface.
 */
export function instanceOfNoteUpdateModel(value: object): value is NoteUpdateModel {
    return true;
}

export function NoteUpdateModelFromJSON(json: any): NoteUpdateModel {
    return NoteUpdateModelFromJSONTyped(json, false);
}

export function NoteUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteUpdateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'note': json['Note'] == null ? undefined : json['Note'],
        'customValues': json['CustomValues'] == null ? undefined : json['CustomValues'],
        'attachments': json['Attachments'] == null ? undefined : json['Attachments'],
    };
}

export function NoteUpdateModelToJSON(json: any): NoteUpdateModel {
    return NoteUpdateModelToJSONTyped(json, false);
}

export function NoteUpdateModelToJSONTyped(value?: NoteUpdateModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AccountId': value['accountId'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Note': value['note'],
        'CustomValues': value['customValues'],
        'Attachments': value['attachments'],
    };
}

export const NoteUpdateModelPropertyValidationAttributesMap: {
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

