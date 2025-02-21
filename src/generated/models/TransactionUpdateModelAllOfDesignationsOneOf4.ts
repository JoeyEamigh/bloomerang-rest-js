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
import type { TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner } from './TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';
import {
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSONTyped,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSONTyped,
} from './TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';
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
 * @interface TransactionUpdateModelAllOfDesignationsOneOf4
 */
export interface TransactionUpdateModelAllOfDesignationsOneOf4 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    acknowledgementStatus?: TransactionUpdateModelAllOfDesignationsOneOf4AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    nonDeductibleAmount?: number;
    /**
     * The ID of the fund for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    fundId?: number;
    /**
     * The ID of the quickbooks account for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    quickbooksAccountId?: number;
    /**
     * The ID of the campaign for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    campaignId?: number;
    /**
     * The ID of the appeal for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    appealId?: number;
    /**
     * The ID of the tribute for this donation
     * @type {number}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    tributeId?: number;
    /**
     * 
     * @type {Array<TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    softCredits?: Array<TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>;
    /**
     * 
     * @type {Array<NoteInputModelAllOfCustomValues>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    customValues?: Array<NoteInputModelAllOfCustomValues>;
    /**
     * 
     * @type {Array<TransactionCreateModelAllOfAttachments>}
     * @memberof TransactionUpdateModelAllOfDesignationsOneOf4
     */
    attachments?: Array<TransactionCreateModelAllOfAttachments>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionUpdateModelAllOfDesignationsOneOf4AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}


/**
 * Check if a given object implements the TransactionUpdateModelAllOfDesignationsOneOf4 interface.
 */
export function instanceOfTransactionUpdateModelAllOfDesignationsOneOf4(value: object): value is TransactionUpdateModelAllOfDesignationsOneOf4 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TransactionUpdateModelAllOfDesignationsOneOf4FromJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf4 {
    return TransactionUpdateModelAllOfDesignationsOneOf4FromJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf4FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionUpdateModelAllOfDesignationsOneOf4 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'nonDeductibleAmount': json['NonDeductibleAmount'] == null ? undefined : json['NonDeductibleAmount'],
        'fundId': json['FundId'] == null ? undefined : json['FundId'],
        'quickbooksAccountId': json['QuickbooksAccountId'] == null ? undefined : json['QuickbooksAccountId'],
        'campaignId': json['CampaignId'] == null ? undefined : json['CampaignId'],
        'appealId': json['AppealId'] == null ? undefined : json['AppealId'],
        'tributeId': json['TributeId'] == null ? undefined : json['TributeId'],
        'softCredits': json['SoftCredits'] == null ? undefined : ((json['SoftCredits'] as Array<any>).map(TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsFromJSON)),
    };
}

export function TransactionUpdateModelAllOfDesignationsOneOf4ToJSON(json: any): TransactionUpdateModelAllOfDesignationsOneOf4 {
    return TransactionUpdateModelAllOfDesignationsOneOf4ToJSONTyped(json, false);
}

export function TransactionUpdateModelAllOfDesignationsOneOf4ToJSONTyped(value?: TransactionUpdateModelAllOfDesignationsOneOf4 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'NonDeductibleAmount': value['nonDeductibleAmount'],
        'FundId': value['fundId'],
        'QuickbooksAccountId': value['quickbooksAccountId'],
        'CampaignId': value['campaignId'],
        'AppealId': value['appealId'],
        'TributeId': value['tributeId'],
        'SoftCredits': value['softCredits'] == null ? undefined : ((value['softCredits'] as Array<any>).map(TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteInputModelAllOfCustomValuesToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(TransactionCreateModelAllOfAttachmentsToJSON)),
    };
}

export const TransactionUpdateModelAllOfDesignationsOneOf4PropertyValidationAttributesMap: {
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

