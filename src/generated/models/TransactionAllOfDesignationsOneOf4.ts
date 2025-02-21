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
import type { NoteAllOfCustomValues } from './NoteAllOfCustomValues';
import {
    NoteAllOfCustomValuesFromJSON,
    NoteAllOfCustomValuesFromJSONTyped,
    NoteAllOfCustomValuesToJSON,
    NoteAllOfCustomValuesToJSONTyped,
} from './NoteAllOfCustomValues';
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
 * @interface TransactionAllOfDesignationsOneOf4
 */
export interface TransactionAllOfDesignationsOneOf4 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    id?: number;
    /**
     * A user-friendly designation number used in the Bloomerang CRM UI (not to be confused with ID).  In Bloomerang CRM Reporting, this is known as the Transaction Number.
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    designationNumber?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    transactionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    nonDeductibleAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    acknowledgementStatus?: TransactionAllOfDesignationsOneOf4AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    fund?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    quickbooksAccount?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    campaign?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    appeal?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    tribute?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    tributeType?: TransactionAllOfDesignationsOneOf4TributeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    softCreditIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<NoteAllOfCustomValues>}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    customValues?: Array<NoteAllOfCustomValues>;
    /**
     * If the QuickBooks Online integration is enabled, this is the QBO status of the designation
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    quickBooksOnlineStatus?: string;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    type?: TransactionAllOfDesignationsOneOf4TypeEnum;
    /**
     * The designation ID of the payment's recurring donation schedule
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf4
     */
    recurringDonationId?: number;
}

/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf4AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf4TributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf4TypeEnum {
    RecurringDonationPayment = 'RecurringDonationPayment'
}


/**
 * Check if a given object implements the TransactionAllOfDesignationsOneOf4 interface.
 */
export function instanceOfTransactionAllOfDesignationsOneOf4(value: object): value is TransactionAllOfDesignationsOneOf4 {
    return true;
}

export function TransactionAllOfDesignationsOneOf4FromJSON(json: any): TransactionAllOfDesignationsOneOf4 {
    return TransactionAllOfDesignationsOneOf4FromJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf4FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAllOfDesignationsOneOf4 {
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
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(NoteAllOfCustomValuesFromJSON)),
        'quickBooksOnlineStatus': json['QuickBooksOnlineStatus'] == null ? undefined : json['QuickBooksOnlineStatus'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
        'type': json['Type'] == null ? undefined : json['Type'],
        'recurringDonationId': json['RecurringDonationId'] == null ? undefined : json['RecurringDonationId'],
    };
}

export function TransactionAllOfDesignationsOneOf4ToJSON(json: any): TransactionAllOfDesignationsOneOf4 {
    return TransactionAllOfDesignationsOneOf4ToJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf4ToJSONTyped(value?: TransactionAllOfDesignationsOneOf4 | null, ignoreDiscriminator: boolean = false): any {
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
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(NoteAllOfCustomValuesToJSON)),
        'QuickBooksOnlineStatus': value['quickBooksOnlineStatus'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
        'Type': value['type'],
        'RecurringDonationId': value['recurringDonationId'],
    };
}

export const TransactionAllOfDesignationsOneOf4PropertyValidationAttributesMap: {
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

