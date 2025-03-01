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
 * @interface PledgeInstallment
 */
export interface PledgeInstallment {
    /**
     * 
     * @type {number}
     * @memberof PledgeInstallment
     */
    id?: number;
    /**
     * The designation ID of this installment's pledge
     * @type {number}
     * @memberof PledgeInstallment
     */
    pledgeId?: number;
    /**
     * 
     * @type {Date}
     * @memberof PledgeInstallment
     */
    date?: Date;
    /**
     * 
     * @type {number}
     * @memberof PledgeInstallment
     */
    amount?: number;
}

/**
 * Check if a given object implements the PledgeInstallment interface.
 */
export function instanceOfPledgeInstallment(value: object): value is PledgeInstallment {
    return true;
}

export function PledgeInstallmentFromJSON(json: any): PledgeInstallment {
    return PledgeInstallmentFromJSONTyped(json, false);
}

export function PledgeInstallmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PledgeInstallment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'pledgeId': json['PledgeId'] == null ? undefined : json['PledgeId'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'amount': json['Amount'] == null ? undefined : json['Amount'],
    };
}

export function PledgeInstallmentToJSON(json: any): PledgeInstallment {
    return PledgeInstallmentToJSONTyped(json, false);
}

export function PledgeInstallmentToJSONTyped(value?: PledgeInstallment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'PledgeId': value['pledgeId'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Amount': value['amount'],
    };
}

export const PledgeInstallmentPropertyValidationAttributesMap: {
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

