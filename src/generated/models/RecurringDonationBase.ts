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
 * @interface RecurringDonationBase
 */
export interface RecurringDonationBase {
    /**
     * 
     * @type {Date}
     * @memberof RecurringDonationBase
     */
    recurringDonationEndDate?: Date;
}

/**
 * Check if a given object implements the RecurringDonationBase interface.
 */
export function instanceOfRecurringDonationBase(value: object): value is RecurringDonationBase {
    return true;
}

export function RecurringDonationBaseFromJSON(json: any): RecurringDonationBase {
    return RecurringDonationBaseFromJSONTyped(json, false);
}

export function RecurringDonationBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringDonationBase {
    if (json == null) {
        return json;
    }
    return {
        
        'recurringDonationEndDate': json['RecurringDonationEndDate'] == null ? undefined : (new Date(json['RecurringDonationEndDate'])),
    };
}

export function RecurringDonationBaseToJSON(json: any): RecurringDonationBase {
    return RecurringDonationBaseToJSONTyped(json, false);
}

export function RecurringDonationBaseToJSONTyped(value?: RecurringDonationBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'RecurringDonationEndDate': value['recurringDonationEndDate'] == null ? undefined : ((value['recurringDonationEndDate']).toISOString().substring(0,10)),
    };
}

export const RecurringDonationBasePropertyValidationAttributesMap: {
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

