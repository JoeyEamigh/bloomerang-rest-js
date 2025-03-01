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
import type { TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner } from './TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';
import {
    TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON,
    TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSONTyped,
    TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON,
    TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSONTyped,
} from './TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';

/**
 * 
 * @export
 * @interface TransactionCreateModelAllOfDesignationsOneOf
 */
export interface TransactionCreateModelAllOfDesignationsOneOf {
    /**
     * 
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    acknowledgementStatus?: TransactionCreateModelAllOfDesignationsOneOfAcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    type: TransactionCreateModelAllOfDesignationsOneOfTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    nonDeductibleAmount?: number;
    /**
     * The ID of the fund for this donation
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    fundId: number;
    /**
     * The ID of the quickbooks account for this donation
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    quickbooksAccountId?: number;
    /**
     * The ID of the campaign for this donation
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    campaignId?: number;
    /**
     * The ID of the appeal for this donation
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    appealId?: number;
    /**
     * The ID of the tribute for this donation
     * @type {number}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    tributeId?: number;
    /**
     * 
     * @type {Array<TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    softCredits?: Array<TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<TaskCreateModelAllOfAttachments>}
     * @memberof TransactionCreateModelAllOfDesignationsOneOf
     */
    attachments?: Array<TaskCreateModelAllOfAttachments>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionCreateModelAllOfDesignationsOneOfAcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionCreateModelAllOfDesignationsOneOfTypeEnum {
    Donation = 'Donation'
}


/**
 * Check if a given object implements the TransactionCreateModelAllOfDesignationsOneOf interface.
 */
export function instanceOfTransactionCreateModelAllOfDesignationsOneOf(value: object): value is TransactionCreateModelAllOfDesignationsOneOf {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fundId' in value) || value['fundId'] === undefined) return false;
    return true;
}

export function TransactionCreateModelAllOfDesignationsOneOfFromJSON(json: any): TransactionCreateModelAllOfDesignationsOneOf {
    return TransactionCreateModelAllOfDesignationsOneOfFromJSONTyped(json, false);
}

export function TransactionCreateModelAllOfDesignationsOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionCreateModelAllOfDesignationsOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'type': json['Type'],
        'nonDeductibleAmount': json['NonDeductibleAmount'] == null ? undefined : json['NonDeductibleAmount'],
        'fundId': json['FundId'],
        'quickbooksAccountId': json['QuickbooksAccountId'] == null ? undefined : json['QuickbooksAccountId'],
        'campaignId': json['CampaignId'] == null ? undefined : json['CampaignId'],
        'appealId': json['AppealId'] == null ? undefined : json['AppealId'],
        'tributeId': json['TributeId'] == null ? undefined : json['TributeId'],
        'softCredits': json['SoftCredits'] == null ? undefined : ((json['SoftCredits'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(TaskCreateModelAllOfAttachmentsFromJSON)),
    };
}

export function TransactionCreateModelAllOfDesignationsOneOfToJSON(json: any): TransactionCreateModelAllOfDesignationsOneOf {
    return TransactionCreateModelAllOfDesignationsOneOfToJSONTyped(json, false);
}

export function TransactionCreateModelAllOfDesignationsOneOfToJSONTyped(value?: TransactionCreateModelAllOfDesignationsOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'Type': value['type'],
        'NonDeductibleAmount': value['nonDeductibleAmount'],
        'FundId': value['fundId'],
        'QuickbooksAccountId': value['quickbooksAccountId'],
        'CampaignId': value['campaignId'],
        'AppealId': value['appealId'],
        'TributeId': value['tributeId'],
        'SoftCredits': value['softCredits'] == null ? undefined : ((value['softCredits'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(TaskCreateModelAllOfAttachmentsToJSON)),
    };
}

export const TransactionCreateModelAllOfDesignationsOneOfPropertyValidationAttributesMap: {
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

