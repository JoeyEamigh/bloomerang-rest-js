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
 * @interface RecurringDonationPaymentBase
 */
export interface RecurringDonationPaymentBase {
    /**
     * 
     * @type {string}
     * @memberof RecurringDonationPaymentBase
     */
    type?: RecurringDonationPaymentBaseTypeEnum;
    /**
     * The designation ID of the payment's recurring donation schedule
     * @type {number}
     * @memberof RecurringDonationPaymentBase
     */
    recurringDonationId?: number;
}

/**
* @export
* @enum {string}
*/
export enum RecurringDonationPaymentBaseTypeEnum {
    RecurringDonationPayment = 'RecurringDonationPayment'
}


/**
 * Check if a given object implements the RecurringDonationPaymentBase interface.
 */
export function instanceOfRecurringDonationPaymentBase(value: object): value is RecurringDonationPaymentBase {
    return true;
}

export function RecurringDonationPaymentBaseFromJSON(json: any): RecurringDonationPaymentBase {
    return RecurringDonationPaymentBaseFromJSONTyped(json, false);
}

export function RecurringDonationPaymentBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringDonationPaymentBase {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['Type'] == null ? undefined : json['Type'],
        'recurringDonationId': json['RecurringDonationId'] == null ? undefined : json['RecurringDonationId'],
    };
}

export function RecurringDonationPaymentBaseToJSON(json: any): RecurringDonationPaymentBase {
    return RecurringDonationPaymentBaseToJSONTyped(json, false);
}

export function RecurringDonationPaymentBaseToJSONTyped(value?: RecurringDonationPaymentBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Type': value['type'],
        'RecurringDonationId': value['recurringDonationId'],
    };
}

export const RecurringDonationPaymentBasePropertyValidationAttributesMap: {
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

