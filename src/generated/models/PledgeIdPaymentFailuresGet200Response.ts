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
/**
 * 
 * @export
 * @interface PledgeIdPaymentFailuresGet200Response
 */
export interface PledgeIdPaymentFailuresGet200Response {
    /**
     * The ID of the pledge payment failure
     * @type {number}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    id?: number;
    /**
     * The ID of the pledge
     * @type {number}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    pledgeId?: number;
    /**
     * The ID of this payment failure's associated pledge installment
     * @type {number}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    installmentId?: number;
    /**
     * 
     * @type {Date}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    amount?: number;
    /**
     * The reason for the payment failure
     * @type {string}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    reason?: string;
    /**
     * Whether or not the payment failure has been resolved
     * @type {boolean}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    isResolved?: boolean;
    /**
     * Whether or not the payment failure has been suppressed
     * @type {boolean}
     * @memberof PledgeIdPaymentFailuresGet200Response
     */
    isSuppressed?: boolean;
}

/**
 * Check if a given object implements the PledgeIdPaymentFailuresGet200Response interface.
 */
export function instanceOfPledgeIdPaymentFailuresGet200Response(value: object): value is PledgeIdPaymentFailuresGet200Response {
    return true;
}

export function PledgeIdPaymentFailuresGet200ResponseFromJSON(json: any): PledgeIdPaymentFailuresGet200Response {
    return PledgeIdPaymentFailuresGet200ResponseFromJSONTyped(json, false);
}

export function PledgeIdPaymentFailuresGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PledgeIdPaymentFailuresGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'pledgeId': json['PledgeId'] == null ? undefined : json['PledgeId'],
        'installmentId': json['InstallmentId'] == null ? undefined : json['InstallmentId'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'reason': json['Reason'] == null ? undefined : json['Reason'],
        'isResolved': json['IsResolved'] == null ? undefined : json['IsResolved'],
        'isSuppressed': json['IsSuppressed'] == null ? undefined : json['IsSuppressed'],
    };
}

export function PledgeIdPaymentFailuresGet200ResponseToJSON(json: any): PledgeIdPaymentFailuresGet200Response {
    return PledgeIdPaymentFailuresGet200ResponseToJSONTyped(json, false);
}

export function PledgeIdPaymentFailuresGet200ResponseToJSONTyped(value?: PledgeIdPaymentFailuresGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'PledgeId': value['pledgeId'],
        'InstallmentId': value['installmentId'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Amount': value['amount'],
        'Reason': value['reason'],
        'IsResolved': value['isResolved'],
        'IsSuppressed': value['isSuppressed'],
    };
}

export const PledgeIdPaymentFailuresGet200ResponsePropertyValidationAttributesMap: {
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

