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
import type { TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner } from './TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';
import {
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSONTyped,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON,
    TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSONTyped,
} from './TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner';
import type { ConstituentPostRequestAllOfAllOfCustomValuesInner } from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
import {
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
import type { InteractionPostRequestAllOfAllOfAttachmentsInner } from './InteractionPostRequestAllOfAllOfAttachmentsInner';
import {
    InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSONTyped,
    InteractionPostRequestAllOfAllOfAttachmentsInnerToJSON,
    InteractionPostRequestAllOfAllOfAttachmentsInnerToJSONTyped,
} from './InteractionPostRequestAllOfAllOfAttachmentsInner';

/**
 * 
 * @export
 * @interface TransactionIdPutRequestAllOfDesignationsInnerOneOf3
 */
export interface TransactionIdPutRequestAllOfDesignationsInnerOneOf3 {
    /**
     * The ID of the recurring donation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    acknowledgementStatus?: TransactionIdPutRequestAllOfDesignationsInnerOneOf3AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {Date}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    recurringDonationEndDate?: Date;
    /**
     * The ID of the fund for this donation
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    fundId?: number;
    /**
     * The ID of the quickbooks account for this donation
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    quickbooksAccountId?: number;
    /**
     * The ID of the campaign for this donation
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    campaignId?: number;
    /**
     * The ID of the appeal for this donation
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    appealId?: number;
    /**
     * The ID of the tribute for this donation
     * @type {number}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    tributeId?: number;
    /**
     * 
     * @type {Array<TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    softCredits?: Array<TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInner>;
    /**
     * 
     * @type {Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    customValues?: Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>;
    /**
     * 
     * @type {Array<InteractionPostRequestAllOfAllOfAttachmentsInner>}
     * @memberof TransactionIdPutRequestAllOfDesignationsInnerOneOf3
     */
    attachments?: Array<InteractionPostRequestAllOfAllOfAttachmentsInner>;
}

/**
* @export
* @enum {string}
*/
export enum TransactionIdPutRequestAllOfDesignationsInnerOneOf3AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}


/**
 * Check if a given object implements the TransactionIdPutRequestAllOfDesignationsInnerOneOf3 interface.
 */
export function instanceOfTransactionIdPutRequestAllOfDesignationsInnerOneOf3(value: object): value is TransactionIdPutRequestAllOfDesignationsInnerOneOf3 {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf3FromJSON(json: any): TransactionIdPutRequestAllOfDesignationsInnerOneOf3 {
    return TransactionIdPutRequestAllOfDesignationsInnerOneOf3FromJSONTyped(json, false);
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIdPutRequestAllOfDesignationsInnerOneOf3 {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'recurringDonationEndDate': json['RecurringDonationEndDate'] == null ? undefined : (new Date(json['RecurringDonationEndDate'])),
        'fundId': json['FundId'] == null ? undefined : json['FundId'],
        'quickbooksAccountId': json['QuickbooksAccountId'] == null ? undefined : json['QuickbooksAccountId'],
        'campaignId': json['CampaignId'] == null ? undefined : json['CampaignId'],
        'appealId': json['AppealId'] == null ? undefined : json['AppealId'],
        'tributeId': json['TributeId'] == null ? undefined : json['TributeId'],
        'softCredits': json['SoftCredits'] == null ? undefined : ((json['SoftCredits'] as Array<any>).map(TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON)),
        'attachments': json['Attachments'] == null ? undefined : ((json['Attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerFromJSON)),
    };
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf3ToJSON(json: any): TransactionIdPutRequestAllOfDesignationsInnerOneOf3 {
    return TransactionIdPutRequestAllOfDesignationsInnerOneOf3ToJSONTyped(json, false);
}

export function TransactionIdPutRequestAllOfDesignationsInnerOneOf3ToJSONTyped(value?: TransactionIdPutRequestAllOfDesignationsInnerOneOf3 | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'RecurringDonationEndDate': value['recurringDonationEndDate'] == null ? undefined : ((value['recurringDonationEndDate']).toISOString().substring(0,10)),
        'FundId': value['fundId'],
        'QuickbooksAccountId': value['quickbooksAccountId'],
        'CampaignId': value['campaignId'],
        'AppealId': value['appealId'],
        'TributeId': value['tributeId'],
        'SoftCredits': value['softCredits'] == null ? undefined : ((value['softCredits'] as Array<any>).map(TransactionIdPutRequestAllOfDesignationsInnerOneOfAllOfSoftCreditsInnerToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON)),
        'Attachments': value['attachments'] == null ? undefined : ((value['attachments'] as Array<any>).map(InteractionPostRequestAllOfAllOfAttachmentsInnerToJSON)),
    };
}

export const TransactionIdPutRequestAllOfDesignationsInnerOneOf3PropertyValidationAttributesMap: {
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

