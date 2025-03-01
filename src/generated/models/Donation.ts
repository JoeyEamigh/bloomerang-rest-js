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
import type { CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail } from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';
import {
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSONTyped,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSONTyped,
} from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';
import type { DonationAllOfCustomValues } from './DonationAllOfCustomValues';
import {
    DonationAllOfCustomValuesFromJSON,
    DonationAllOfCustomValuesFromJSONTyped,
    DonationAllOfCustomValuesToJSON,
    DonationAllOfCustomValuesToJSONTyped,
} from './DonationAllOfCustomValues';

/**
 * 
 * @export
 * @interface Donation
 */
export interface Donation {
    /**
     * The ID of the designation used in the API (not to be confused with DesignationNumber)
     * @type {number}
     * @memberof Donation
     */
    id?: number;
    /**
     * A user-friendly designation number used in the Bloomerang CRM UI (not to be confused with ID).  In Bloomerang CRM Reporting, this is known as the Transaction Number.
     * @type {number}
     * @memberof Donation
     */
    designationNumber?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof Donation
     */
    transactionId?: number;
    /**
     * 
     * @type {number}
     * @memberof Donation
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof Donation
     */
    nonDeductibleAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof Donation
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof Donation
     */
    acknowledgementStatus?: DonationAcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof Donation
     */
    acknowledgementInteractionIds?: Array<number>;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof Donation
     */
    fund?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof Donation
     */
    quickbooksAccount?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof Donation
     */
    campaign?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof Donation
     */
    appeal?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner}
     * @memberof Donation
     */
    tribute?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner;
    /**
     * 
     * @type {string}
     * @memberof Donation
     */
    tributeType?: DonationTributeTypeEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof Donation
     */
    softCreditIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Donation
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<DonationAllOfCustomValues>}
     * @memberof Donation
     */
    customValues?: Array<DonationAllOfCustomValues>;
    /**
     * If the QuickBooks Online integration is enabled, this is the QBO status of the designation
     * @type {string}
     * @memberof Donation
     */
    quickBooksOnlineStatus?: string;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof Donation
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * 
     * @type {string}
     * @memberof Donation
     */
    type?: DonationTypeEnum;
}

/**
* @export
* @enum {string}
*/
export enum DonationAcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}
/**
* @export
* @enum {string}
*/
export enum DonationTributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}
/**
* @export
* @enum {string}
*/
export enum DonationTypeEnum {
    Donation = 'Donation'
}


/**
 * Check if a given object implements the Donation interface.
 */
export function instanceOfDonation(value: object): value is Donation {
    return true;
}

export function DonationFromJSON(json: any): Donation {
    return DonationFromJSONTyped(json, false);
}

export function DonationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Donation {
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
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(DonationAllOfCustomValuesFromJSON)),
        'quickBooksOnlineStatus': json['QuickBooksOnlineStatus'] == null ? undefined : json['QuickBooksOnlineStatus'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
        'type': json['Type'] == null ? undefined : json['Type'],
    };
}

export function DonationToJSON(json: any): Donation {
    return DonationToJSONTyped(json, false);
}

export function DonationToJSONTyped(value?: Donation | null, ignoreDiscriminator: boolean = false): any {
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
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(DonationAllOfCustomValuesToJSON)),
        'QuickBooksOnlineStatus': value['quickBooksOnlineStatus'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
        'Type': value['type'],
    };
}

export const DonationPropertyValidationAttributesMap: {
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

