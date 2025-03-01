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
 * @interface Refund
 */
export interface Refund {
    /**
     * The ID of the refund
     * @type {number}
     * @memberof Refund
     */
    id?: number;
    /**
     * The ID of the transaction used in the API (not to be confused with transactionNumber)
     * @type {number}
     * @memberof Refund
     */
    transactionId?: number;
    /**
     * The reason for making this refund
     * @type {string}
     * @memberof Refund
     */
    note?: string;
    /**
     * 
     * @type {Date}
     * @memberof Refund
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof Refund
     */
    amount?: number;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof Refund
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
}

/**
 * Check if a given object implements the Refund interface.
 */
export function instanceOfRefund(value: object): value is Refund {
    return true;
}

export function RefundFromJSON(json: any): Refund {
    return RefundFromJSONTyped(json, false);
}

export function RefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Refund {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'transactionId': json['TransactionId'] == null ? undefined : json['TransactionId'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
    };
}

export function RefundToJSON(json: any): Refund {
    return RefundToJSONTyped(json, false);
}

export function RefundToJSONTyped(value?: Refund | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'TransactionId': value['transactionId'],
        'Note': value['note'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Amount': value['amount'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
    };
}

export const RefundPropertyValidationAttributesMap: {
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

