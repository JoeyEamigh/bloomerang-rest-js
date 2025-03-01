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
 * @interface FundBase
 */
export interface FundBase {
    /**
     * The class label for this fund in the general ledger (quickbooks)
     * @type {string}
     * @memberof FundBase
     */
    generalLedgerClass?: string;
    /**
     * The ID of the general ledger (quickbooks) account to which this fund will default
     * @type {number}
     * @memberof FundBase
     */
    defaultQuickbooksAccountId?: number;
    /**
     * The IDs of all general ledger (quickbooks) accounts associated with this fund
     * @type {Array<number>}
     * @memberof FundBase
     */
    quickbooksAccountIds?: Array<number>;
}

/**
 * Check if a given object implements the FundBase interface.
 */
export function instanceOfFundBase(value: object): value is FundBase {
    return true;
}

export function FundBaseFromJSON(json: any): FundBase {
    return FundBaseFromJSONTyped(json, false);
}

export function FundBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FundBase {
    if (json == null) {
        return json;
    }
    return {
        
        'generalLedgerClass': json['GeneralLedgerClass'] == null ? undefined : json['GeneralLedgerClass'],
        'defaultQuickbooksAccountId': json['DefaultQuickbooksAccountId'] == null ? undefined : json['DefaultQuickbooksAccountId'],
        'quickbooksAccountIds': json['QuickbooksAccountIds'] == null ? undefined : json['QuickbooksAccountIds'],
    };
}

export function FundBaseToJSON(json: any): FundBase {
    return FundBaseToJSONTyped(json, false);
}

export function FundBaseToJSONTyped(value?: FundBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'GeneralLedgerClass': value['generalLedgerClass'],
        'DefaultQuickbooksAccountId': value['defaultQuickbooksAccountId'],
        'QuickbooksAccountIds': value['quickbooksAccountIds'],
    };
}

export const FundBasePropertyValidationAttributesMap: {
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

