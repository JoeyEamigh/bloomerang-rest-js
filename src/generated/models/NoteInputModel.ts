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
import type { NoteInputModelAllOfCustomValues } from './NoteInputModelAllOfCustomValues';
import {
    NoteInputModelAllOfCustomValuesFromJSON,
    NoteInputModelAllOfCustomValuesFromJSONTyped,
    NoteInputModelAllOfCustomValuesToJSON,
    NoteInputModelAllOfCustomValuesToJSONTyped,
} from './NoteInputModelAllOfCustomValues';
import type { NoteInputModelAllOfAttachments } from './NoteInputModelAllOfAttachments';
import {
    NoteInputModelAllOfAttachmentsFromJSON,
    NoteInputModelAllOfAttachmentsFromJSONTyped,
    NoteInputModelAllOfAttachmentsToJSON,
    NoteInputModelAllOfAttachmentsToJSONTyped,
} from './NoteInputModelAllOfAttachments';

/**
 * 
 * @export
 * @interface NoteInputModel
 */
export interface NoteInputModel {
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof NoteInputModel
     */
    accountId?: number;
    /**
     * 
     * @type {Date}
     * @memberof NoteInputModel
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof NoteInputModel
     */
    note?: string;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof NoteInputModel
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<NoteInputModelAllOfAttachments>}
     * @memberof NoteInputModel
     */
    attachments?: Array<NoteInputModelAllOfAttachments>;
}

/**
 * Check if a given object implements the NoteInputModel interface.
 */
export function instanceOfNoteInputModel(value: object): value is NoteInputModel {
    return true;
}

export function NoteInputModelFromJSON(json: any): NoteInputModel {
    return NoteInputModelFromJSONTyped(json, false);
}

export function NoteInputModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteInputModel {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'note': json['Note'] == null ? undefined : json['Note'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(NoteInputModelAllOfAttachmentsFromJSON)),
    };
}

export function NoteInputModelToJSON(json: any): NoteInputModel {
    return NoteInputModelToJSONTyped(json, false);
}

export function NoteInputModelToJSONTyped(value?: NoteInputModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AccountId': value['accountId'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Note': value['note'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(NoteInputModelAllOfAttachmentsToJSON)),
    };
}

export const NoteInputModelPropertyValidationAttributesMap: {
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

