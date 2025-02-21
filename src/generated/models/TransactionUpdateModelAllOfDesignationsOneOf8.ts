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
import type { TransactionCreateModelAllOfAttachments } from './TransactionCreateModelAllOfAttachments';
import {
    TransactionCreateModelAllOfAttachmentsFromJSON,
    TransactionCreateModelAllOfAttachmentsFromJSONTyped,
    TransactionCreateModelAllOfAttachmentsToJSON,
    TransactionCreateModelAllOfAttachmentsToJSONTyped,
} from './TransactionCreateModelAllOfAttachments';

/**
 * 
 * @export
 * @interface TransactionUpdateModelAllOfDesignationsOneOf8
 */
export interface TransactionUpdateModelAllOfDesignationsOneOf8 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    acknowledgementStatus?: TransactionUpdateModelAllOfDesignationsOneOf8AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * The ID of the fund for this recurring donation payment
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    fundId?: number;
    /**
     * The ID of the quickbooks account for this recurring donation payment
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    quickbooksAccountId?: number;
    /**
     * The ID of the campaign for this recurring donation payment
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    campaignId?: number;
    /**
     * The ID of the appeal for this recurring donation payment
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    appealId?: number;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<TransactionCreateModelAllOfAttachments>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf8
     */
    attachments?: Array<TransactionCreateModelAllOfAttachments>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionUpdateModelAllOfDesignationsOneOf8AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}


/**
 * Check if a given object implements the TransactionUpdateModelAllOfDesignationsOneOf8 interface.
 */
export function instanceOfTransactionUpdateModelAllOfDesignationsOneOf8(value: object): value is TransactionUpdateModelAllOfDesignationsOneOf8 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TransactionUpdateModelAllOfDesignationsOneOf8FromJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf8 {
    return TransactionUpdateModelAllOfDesignationsOneOf8FromJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf8FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionUpdateModelAllOfDesignationsOneOf8 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'fundId': json['FundId'] == null ? undefined : json['FundId'],
        'quickbooksAccountId': json['QuickbooksAccountId'] == null ? undefined : json['QuickbooksAccountId'],
        'campaignId': json['CampaignId'] == null ? undefined : json['CampaignId'],
        'appealId': json['AppealId'] == null ? undefined : json['AppealId'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsFromJSON)),
    };
}

export function TransactionUpdateModelAllOfDesignationsOneOf8ToJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf8 {
    return TransactionUpdateModelAllOfDesignationsOneOf8ToJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf8ToJSONTyped(value?: TransactionUpdateModelAllOfDesignationsOneOf8 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'FundId': value['fundId'],
        'QuickbooksAccountId': value['quickbooksAccountId'],
        'CampaignId': value['campaignId'],
        'AppealId': value['appealId'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsToJSON)),
    };
}

export const TransactionUpdateModelAllOfDesignationsOneOf8PropertyValidationAttributesMap: {
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

