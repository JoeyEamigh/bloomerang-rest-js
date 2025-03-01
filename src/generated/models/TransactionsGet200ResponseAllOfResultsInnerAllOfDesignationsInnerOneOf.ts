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
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner';
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInner } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInner';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInner';
import type { CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail } from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';
import {
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSONTyped,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSONTyped,
} from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';

/**
 * 
 * @export
 * @interface TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
 */
export interface TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    id?: number;
    /**
     * A user-friendly designation number used in the Bloomerang CRM UI (not to be confused with ID).  In Bloomerang CRM Reporting, this is known as the Transaction Number.
     * @type {number}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    designationNumber?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    transactionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    nonDeductibleAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    acknowledgementStatus?: TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfAcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    fund?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    quickbooksAccount?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    campaign?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    appeal?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    tribute?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {string}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    tributeType?: TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfTributeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    softCreditIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInner>}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    customValues?: Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInner>;
    /**
     * If the QuickBooks Online integration is enabled, this is the QBO status of the designation
     * @type {string}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    quickBooksOnlineStatus?: string;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * 
     * @type {string}
     * @memberof TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf
     */
    type?: TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfAcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfTributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}
/**
* @export
* @enum {string}
*/
export enum TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfTypeEnum {
    Donation = 'Donation'
}


/**
 * Check if a given object implements the TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf interface.
 */
export function instanceOfTransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf(value: object): value is TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf {
    return true;
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSON(json: any): TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf {
    return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSONTyped(json, false);
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'designationNumber': json['DesignationNumber'] == null ? undefined : json['DesignationNumber'],
        'transactionId': json['TransactionId'] == null ? undefined : json['TransactionId'],
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'nonDeductibleAmount': json['NonDeductibleAmount'] == null ? undefined : json['NonDeductibleAmount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
        'fund': json['Fund'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON(json['Fund']),
        'quickbooksAccount': json['QuickbooksAccount'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON(json['QuickbooksAccount']),
        'campaign': json['Campaign'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON(json['Campaign']),
        'appeal': json['Appeal'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON(json['Appeal']),
        'tribute': json['Tribute'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON(json['Tribute']),
        'tributeType': json['TributeType'] == null ? undefined : json['TributeType'],
        'softCreditIds': json['SoftCreditIds'] == null ? undefined : json['SoftCreditIds'],
        'attachmentIds': json['AttachmentIds'] == null ? undefined : json['AttachmentIds'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerFromJSON)),
        'quickBooksOnlineStatus': json['QuickBooksOnlineStatus'] == null ? undefined : json['QuickBooksOnlineStatus'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
        'type': json['Type'] == null ? undefined : json['Type'],
    };
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfToJSON(json: any): TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf {
    return TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfToJSONTyped(json, false);
}

export function TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfToJSONTyped(value?: TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'DesignationNumber': value['designationNumber'],
        'TransactionId': value['transactionId'],
        'Amount': value['amount'],
        'NonDeductibleAmount': value['nonDeductibleAmount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
        'Fund': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON(value['fund']),
        'QuickbooksAccount': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON(value['quickbooksAccount']),
        'Campaign': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON(value['campaign']),
        'Appeal': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON(value['appeal']),
        'Tribute': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON(value['tribute']),
        'TributeType': value['tributeType'],
        'SoftCreditIds': value['softCreditIds'],
        'AttachmentIds': value['attachmentIds'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomValuesInnerToJSON)),
        'QuickBooksOnlineStatus': value['quickBooksOnlineStatus'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
        'Type': value['type'],
    };
}

export const TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOfPropertyValidationAttributesMap: {
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

