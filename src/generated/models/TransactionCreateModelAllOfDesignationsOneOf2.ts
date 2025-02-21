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
import type { TaskCreateModelAllOfAttachments } from './TaskCreateModelAllOfAttachments';
import {
    TaskCreateModelAllOfAttachmentsFromJSON,
    TaskCreateModelAllOfAttachmentsFromJSONTyped,
    TaskCreateModelAllOfAttachmentsToJSON,
    TaskCreateModelAllOfAttachmentsToJSONTyped,
} from './TaskCreateModelAllOfAttachments';

/**
 * 
 * @export
 * @interface TransactionCreateModelAllOfDesignationsOneOf2
 */
export interface TransactionCreateModelAllOfDesignationsOneOf2 {
    /**
     * 
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    acknowledgementStatus?: TransactionCreateModelAllOfDesignationsOneOf2AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    type?: TransactionCreateModelAllOfDesignationsOneOf2TypeEnum;
    /**
     * The designation ID of the payment's pledge
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    pledgeId: number;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<TaskCreateModelAllOfAttachments>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf2
     */
    attachments?: Array<TaskCreateModelAllOfAttachments>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionCreateModelAllOfDesignationsOneOf2AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionCreateModelAllOfDesignationsOneOf2TypeEnum {
    PledgePayment = 'PledgePayment'
}


/**
 * Check if a given object implements the TransactionCreateModelAllOfDesignationsOneOf2 interface.
 */
export function instanceOfTransactionCreateModelAllOfDesignationsOneOf2(value: object): value is TransactionCreateModelAllOfDesignationsOneOf2 {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('pledgeId' in value) || value['pledgeId'] === undefined) return false;
    return true;
}

export function TransactionCreateModelAllOfDesignationsOneOf2FromJSON(json: any): TransactionCreateModelAllOfDesignationsOneOf2 {
    return TransactionCreateModelAllOfDesignationsOneOf2FromJSONTyped(json, false);
}

export function TransactionCreateModelAllOfDesignationsOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCreateModelAllOfDesignationsOneOf2 {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'pledgeId': json['PledgeId'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(TaskCreateModelAllOfAttachmentsFromJSON)),
    };
}

export function TransactionCreateModelAllOfDesignationsOneOf2ToJSON(json: any): TransactionCreateModelAllOfDesignationsOneOf2 {
    return TransactionCreateModelAllOfDesignationsOneOf2ToJSONTyped(json, false);
}

export function TransactionCreateModelAllOfDesignationsOneOf2ToJSONTyped(value?: TransactionCreateModelAllOfDesignationsOneOf2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'Type': value['type'],
        'PledgeId': value['pledgeId'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(TaskCreateModelAllOfAttachmentsToJSON)),
    };
}

export const TransactionCreateModelAllOfDesignationsOneOf2PropertyValidationAttributesMap: {
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

