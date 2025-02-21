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
import type { PledgeIdInstallmentsGet200ResponseAllOfResultsInner } from './PledgeIdInstallmentsGet200ResponseAllOfResultsInner';
import {
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSON,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSONTyped,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSON,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSONTyped,
} from './PledgeIdInstallmentsGet200ResponseAllOfResultsInner';
import type { NoteAllOfCustomValues } from './NoteAllOfCustomValues';
import {
    NoteAllOfCustomValuesFromJSON,
    NoteAllOfCustomValuesFromJSONTyped,
    NoteAllOfCustomValuesToJSON,
    NoteAllOfCustomValuesToJSONTyped,
} from './NoteAllOfCustomValues';
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInner } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInner';
import {
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerFromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerFromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerToJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerToJSONTyped,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInner';
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
 * @interface TransactionAllOfDesignationsOneOf1
 */
export interface TransactionAllOfDesignationsOneOf1 {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    id?: number;
    /**
     * A user-friendly designation number used in the Bloomerang CRM UI (not to be confused with ID).  In Bloomerang CRM Reporting, this is known as the Transaction Number.
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    designationNumber?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    transactionId?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    nonDeductibleAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    acknowledgementStatus?: TransactionAllOfDesignationsOneOf1AcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    fund?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    quickbooksAccount?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    campaign?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    appeal?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    tribute?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    tributeType?: TransactionAllOfDesignationsOneOf1TributeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    softCreditIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<NoteAllOfCustomValues>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    customValues?: Array<NoteAllOfCustomValues>;
    /**
     * If the QuickBooks Online integration is enabled, this is the QBO status of the designation
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    quickBooksOnlineStatus?: string;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    type?: TransactionAllOfDesignationsOneOf1TypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgePaymentIds?: Array<number>;
    /**
     * 
     * @type {Array<PledgeIdInstallmentsGet200ResponseAllOfResultsInner>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeInstallments?: Array<PledgeIdInstallmentsGet200ResponseAllOfResultsInner>;
    /**
     * The current outstanding balance on the pledge
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeBalance?: number;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    lastPaymentStatus?: TransactionAllOfDesignationsOneOf1LastPaymentStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeStatus?: TransactionAllOfDesignationsOneOf1PledgeStatusEnum;
    /**
     * 
     * @type {Array<TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInner>}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeWriteOffs?: Array<TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInner>;
    /**
     * If the pledge is in arrears, this is the current amount by which the pledge is in arrears
     * @type {number}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeAmountInArrears?: number;
    /**
     * The next installment date for this pledge (if any)
     * @type {Date}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeNextInstallmentDate?: Date;
    /**
     * Determines whether the Pledge Frequency may be modified after the pledge has been created
     * @type {boolean}
     * @memberof TransactionAllOfDesignationsOneOf1
     */
    pledgeFrequencyIsEditable?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf1AcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf1TributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf1TypeEnum {
    Pledge = 'Pledge'
}
/**
* @export
* @enum {string}
*/
export enum TransactionAllOfDesignationsOneOf1LastPaymentStatusEnum {
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
export enum TransactionAllOfDesignationsOneOf1PledgeStatusEnum {
    InGoodStanding = 'InGoodStanding',
    InArrears = 'InArrears',
    Fulfilled = 'Fulfilled',
    Overpaid = 'Overpaid',
    WrittenOff = 'WrittenOff',
    PartiallyWrittenOff = 'PartiallyWrittenOff'
}


/**
 * Check if a given object implements the TransactionAllOfDesignationsOneOf1 interface.
 */
export function instanceOfTransactionAllOfDesignationsOneOf1(value: object): value is TransactionAllOfDesignationsOneOf1 {
    return true;
}

export function TransactionAllOfDesignationsOneOf1FromJSON(json: any): TransactionAllOfDesignationsOneOf1 {
    return TransactionAllOfDesignationsOneOf1FromJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionAllOfDesignationsOneOf1 {
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
        'pledgePaymentIds': json['PledgePaymentIds'] == null ? undefined : json['PledgePaymentIds'],
        'pledgeInstallments': json['PledgeInstallments'] == null ? undefined : ((json['PledgeInstallments'] as Array<any>).map(PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSON)),
        'pledgeBalance': json['PledgeBalance'] == null ? undefined : json['PledgeBalance'],
        'lastPaymentStatus': json['LastPaymentStatus'] == null ? undefined : json['LastPaymentStatus'],
        'pledgeStatus': json['PledgeStatus'] == null ? undefined : json['PledgeStatus'],
        'pledgeWriteOffs': json['PledgeWriteOffs'] == null ? undefined : ((json['PledgeWriteOffs'] as Array<any>).map(TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerFromJSON)),
        'pledgeAmountInArrears': json['PledgeAmountInArrears'] == null ? undefined : json['PledgeAmountInArrears'],
        'pledgeNextInstallmentDate': json['PledgeNextInstallmentDate'] == null ? undefined : (new Date(json['PledgeNextInstallmentDate'])),
        'pledgeFrequencyIsEditable': json['PledgeFrequencyIsEditable'] == null ? undefined : json['PledgeFrequencyIsEditable'],
    };
}

export function TransactionAllOfDesignationsOneOf1ToJSON(json: any): TransactionAllOfDesignationsOneOf1 {
    return TransactionAllOfDesignationsOneOf1ToJSONTyped(json, false);
}

export function TransactionAllOfDesignationsOneOf1ToJSONTyped(value?: TransactionAllOfDesignationsOneOf1 | null, ignoreDiscriminator: boolean = false): any {
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
        'PledgePaymentIds': value['pledgePaymentIds'],
        'PledgeInstallments': value['pledgeInstallments'] == null ? undefined : ((value['pledgeInstallments'] as Array<any>).map(PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSON)),
        'PledgeBalance': value['pledgeBalance'],
        'LastPaymentStatus': value['lastPaymentStatus'],
        'PledgeStatus': value['pledgeStatus'],
        'PledgeWriteOffs': value['pledgeWriteOffs'] == null ? undefined : ((value['pledgeWriteOffs'] as Array<any>).map(TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerOneOf1AllOfPledgeWriteOffsInnerToJSON)),
        'PledgeAmountInArrears': value['pledgeAmountInArrears'],
        'PledgeNextInstallmentDate': value['pledgeNextInstallmentDate'] == null ? undefined : ((value['pledgeNextInstallmentDate']).toISOString().substring(0,10)),
        'PledgeFrequencyIsEditable': value['pledgeFrequencyIsEditable'],
    };
}

export const TransactionAllOfDesignationsOneOf1PropertyValidationAttributesMap: {
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

