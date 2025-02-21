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
 * @interface TransactionUpdateModelAllOfDesignationsOneOf2
 */
export interface TransactionUpdateModelAllOfDesignationsOneOf2 {
    /**
     * 
     * @type {Date}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    recurringDonationEndDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    amount: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    acknowledgementStatus?: TransactionUpdateModelAllOfDesignationsOneOf2AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    recurringDonationFrequency: TransactionUpdateModelAllOfDesignationsOneOf2RecurringDonationFrequencyEnum;
    /**
     * Day1 & Day2 are only used with the TwiceMonthly frequency
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    recurringDonationDay1?: number;
    /**
     * Day1 & Day2 are only used with the TwiceMonthly frequency
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    recurringDonationDay2?: number;
    /**
     * 
     * @type {Date}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    recurringDonationStartDate: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    type: TransactionUpdateModelAllOfDesignationsOneOf2TypeEnum;
    /**
     * The ID of the fund for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    fundId: number;
    /**
     * The ID of the quickbooks account for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    quickbooksAccountId?: number;
    /**
     * The ID of the campaign for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    campaignId?: number;
    /**
     * The ID of the appeal for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    appealId?: number;
    /**
     * The ID of the tribute for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    tributeId?: number;
    /**
     * 
     * @type {Array<TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    softCredits?: Array<TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<TransactionCreateModelAllOfAttachments>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf2
     */
    attachments?: Array<TransactionCreateModelAllOfAttachments>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionUpdateModelAllOfDesignationsOneOf2AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionUpdateModelAllOfDesignationsOneOf2RecurringDonationFrequencyEnum {
    Weekly = 'Weekly',
    EveryOtherWeekly = 'EveryOtherWeekly',
    TwiceMonthly = 'TwiceMonthly',
    Monthly = 'Monthly',
    EveryOtherMonthly = 'EveryOtherMonthly',
    Quarterly = 'Quarterly',
    Yearly = 'Yearly'
}
/**
* @export
* @enum {string}
*/
export enum TransactionUpdateModelAllOfDesignationsOneOf2TypeEnum {
    RecurringDonation = 'RecurringDonation'
}


/**
 * Check if a given object implements the TransactionUpdateModelAllOfDesignationsOneOf2 interface.
 */
export function instanceOfTransactionUpdateModelAllOfDesignationsOneOf2(value: object): value is TransactionUpdateModelAllOfDesignationsOneOf2 {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('recurringDonationFrequency' in value) || value['recurringDonationFrequency'] === undefined) return false;
    if (!('recurringDonationStartDate' in value) || value['recurringDonationStartDate'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('fundId' in value) || value['fundId'] === undefined) return false;
    return true;
}

export function TransactionUpdateModelAllOfDesignationsOneOf2FromJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf2 {
    return TransactionUpdateModelAllOfDesignationsOneOf2FromJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf2FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionUpdateModelAllOfDesignationsOneOf2 {
    if (json == null) {
        return json;
    }
    return {
        
        'recurringDonationEndDate': json['RecurringDonationEndDate'] == null ? undefined : (new Date(json['RecurringDonationEndDate'])),
        'amount': json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'recurringDonationFrequency': json['RecurringDonationFrequency'],
        'recurringDonationDay1': json['RecurringDonationDay1'] == null ? undefined : json['RecurringDonationDay1'],
        'recurringDonationDay2': json['RecurringDonationDay2'] == null ? undefined : json['RecurringDonationDay2'],
        'recurringDonationStartDate': (new Date(json['RecurringDonationStartDate'])),
        'type': json['Type'],
        'fundId': json['FundId'],
        'quickbooksAccountId': json['QuickbooksAccountId'] == null ? undefined : json['QuickbooksAccountId'],
        'campaignId': json['CampaignId'] == null ? undefined : json['CampaignId'],
        'appealId': json['AppealId'] == null ? undefined : json['AppealId'],
        'tributeId': json['TributeId'] == null ? undefined : json['TributeId'],
        'softCredits': json['SoftCredits'] == null ? undefined : ((json['SoftCredits'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsFromJSON)),
    };
}

export function TransactionUpdateModelAllOfDesignationsOneOf2ToJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf2 {
    return TransactionUpdateModelAllOfDesignationsOneOf2ToJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf2ToJSONTyped(value?: TransactionUpdateModelAllOfDesignationsOneOf2 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RecurringDonationEndDate': value['recurringDonationEndDate'] == null ? undefined : ((value['recurringDonationEndDate']).toISOString().substring(0,10)),
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'RecurringDonationFrequency': value['recurringDonationFrequency'],
        'RecurringDonationDay1': value['recurringDonationDay1'],
        'RecurringDonationDay2': value['recurringDonationDay2'],
        'RecurringDonationStartDate': ((value['recurringDonationStartDate']).toISOString().substring(0,10)),
        'Type': value['type'],
        'FundId': value['fundId'],
        'QuickbooksAccountId': value['quickbooksAccountId'],
        'CampaignId': value['campaignId'],
        'AppealId': value['appealId'],
        'TributeId': value['tributeId'],
        'SoftCredits': value['softCredits'] == null ? undefined : ((value['softCredits'] as Array<any>).map(TransactionPostRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsToJSON)),
    };
}

export const TransactionUpdateModelAllOfDesignationsOneOf2PropertyValidationAttributesMap: {
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
    recurringDonationDay1: {
        maximum: 31,
        exclusiveMaximum: false,
        minimum: 1,
        exclusiveMinimum: false,
    },
    recurringDonationDay2: {
        maximum: 31,
        exclusiveMaximum: false,
        minimum: 1,
        exclusiveMinimum: false,
    },
}

