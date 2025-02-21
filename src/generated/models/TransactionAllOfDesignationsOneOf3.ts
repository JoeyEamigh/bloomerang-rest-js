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
 * @interface TransactionAllOfDesignationsOneOf3
 */
export interface TransactionAllOfDesignationsOneOf3 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    id?: number;
    /**
     * A user-friendly designation number used in the Bloomerang CRM UI (not to be confused with ID).  In Bloomerang CRM Reporting, this is known as the Transaction Number.
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    designationNumber?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    transactionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    nonDeductibleAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    acknowledgementStatus?: TransactionAllOfDesignationsOneOf3AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    fund?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    quickbooksAccount?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    campaign?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    appeal?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    tribute?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    tributeType?: TransactionAllOfDesignationsOneOf3TributeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    softCreditIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<NoteAllOfCustomValues>}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    customValues?: Array<NoteAllOfCustomValues>;
    /**
     * If the QuickBooks Online integration is enabled, this is the QBO status of the designation
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    quickBooksOnlineStatus?: string;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * 
     * @type {Date}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationEndDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationFrequency?: TransactionAllOfDesignationsOneOf3RecurringDonationFrequencyEnum;
    /**
     * Day1 & Day2 are only used with the TwiceMonthly frequency
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationDay1?: number;
    /**
     * Day1 & Day2 are only used with the TwiceMonthly frequency
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationDay2?: number;
    /**
     * 
     * @type {Date}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationStartDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    type?: TransactionAllOfDesignationsOneOf3TypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationPaymentIds?: Array<number>;
    /**
     * The next installment date for this recurring donation (if any)
     * @type {Date}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationNextInstallmentDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationLastPaymentStatus?: TransactionAllOfDesignationsOneOf3RecurringDonationLastPaymentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf3
     */
    recurringDonationStatus?: TransactionAllOfDesignationsOneOf3RecurringDonationStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf3AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf3TributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf3RecurringDonationFrequencyEnum {
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
export enum TransactionAllOfDesignationsOneOf3TypeEnum {
    RecurringDonation = 'RecurringDonation'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf3RecurringDonationLastPaymentStatusEnum {
    AtRisk = 'AtRisk',
    Ended = 'Ended',
    Failed = 'Failed',
    NoPayment = 'NoPayment',
    Successful = 'Successful'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf3RecurringDonationStatusEnum {
    Active = 'Active',
    Closed = 'Closed',
    Overdue = 'Overdue'
}


/**
 * Check if a given object implements the TransactionAllOfDesignationsOneOf3 interface.
 */
export function instanceOfTransactionAllOfDesignationsOneOf3(value: object): value is TransactionAllOfDesignationsOneOf3 {
    return true;
}

export function TransactionAllOfDesignationsOneOf3FromJSON(json: any): TransactionAllOfDesignationsOneOf3 {
    return TransactionAllOfDesignationsOneOf3FromJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf3FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAllOfDesignationsOneOf3 {
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
        'recurringDonationEndDate': json['RecurringDonationEndDate'] == null ? undefined : (new Date(json['RecurringDonationEndDate'])),
        'recurringDonationFrequency': json['RecurringDonationFrequency'] == null ? undefined : json['RecurringDonationFrequency'],
        'recurringDonationDay1': json['RecurringDonationDay1'] == null ? undefined : json['RecurringDonationDay1'],
        'recurringDonationDay2': json['RecurringDonationDay2'] == null ? undefined : json['RecurringDonationDay2'],
        'recurringDonationStartDate': json['RecurringDonationStartDate'] == null ? undefined : (new Date(json['RecurringDonationStartDate'])),
        'type': json['Type'] == null ? undefined : json['Type'],
        'recurringDonationPaymentIds': json['RecurringDonationPaymentIds'] == null ? undefined : json['RecurringDonationPaymentIds'],
        'recurringDonationNextInstallmentDate': json['RecurringDonationNextInstallmentDate'] == null ? undefined : (new Date(json['RecurringDonationNextInstallmentDate'])),
        'recurringDonationLastPaymentStatus': json['RecurringDonationLastPaymentStatus'] == null ? undefined : json['RecurringDonationLastPaymentStatus'],
        'recurringDonationStatus': json['RecurringDonationStatus'] == null ? undefined : json['RecurringDonationStatus'],
    };
}

export function TransactionAllOfDesignationsOneOf3ToJSON(json: any): TransactionAllOfDesignationsOneOf3 {
    return TransactionAllOfDesignationsOneOf3ToJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf3ToJSONTyped(value?: TransactionAllOfDesignationsOneOf3 | null, ignoreDiscriminator: boolean = false): any {
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
        'RecurringDonationEndDate': value['recurringDonationEndDate'] == null ? undefined : ((value['recurringDonationEndDate']).toISOString().substring(0,10)),
        'RecurringDonationFrequency': value['recurringDonationFrequency'],
        'RecurringDonationDay1': value['recurringDonationDay1'],
        'RecurringDonationDay2': value['recurringDonationDay2'],
        'RecurringDonationStartDate': value['recurringDonationStartDate'] == null ? undefined : ((value['recurringDonationStartDate']).toISOString().substring(0,10)),
        'Type': value['type'],
        'RecurringDonationPaymentIds': value['recurringDonationPaymentIds'],
        'RecurringDonationNextInstallmentDate': value['recurringDonationNextInstallmentDate'] == null ? undefined : ((value['recurringDonationNextInstallmentDate']).toISOString().substring(0,10)),
        'RecurringDonationLastPaymentStatus': value['recurringDonationLastPaymentStatus'],
        'RecurringDonationStatus': value['recurringDonationStatus'],
    };
}

export const TransactionAllOfDesignationsOneOf3PropertyValidationAttributesMap: {
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

