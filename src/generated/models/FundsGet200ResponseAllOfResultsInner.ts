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
 * @interface FundsGet200ResponseAllOfResultsInner
 */
export interface FundsGet200ResponseAllOfResultsInner {
    /**
     * 
     * @type {number}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    id?: number;
    /**
     * The class label for this fund in the general ledger (quickbooks)
     * @type {string}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    generalLedgerClass?: string;
    /**
     * The ID of the general ledger (quickbooks) account to which this fund will default
     * @type {number}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    defaultQuickbooksAccountId?: number;
    /**
     * The IDs of all general ledger (quickbooks) accounts associated with this fund
     * @type {Array<number>}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    quickbooksAccountIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    sortIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    name?: string;
    /**
     * Is this the default?
     * @type {boolean}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    isDefault?: boolean;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof FundsGet200ResponseAllOfResultsInner
     */
    isActive?: boolean;
}

/**
 * Check if a given object implements the FundsGet200ResponseAllOfResultsInner interface.
 */
export function instanceOfFundsGet200ResponseAllOfResultsInner(value: object): value is FundsGet200ResponseAllOfResultsInner {
    return true;
}

export function FundsGet200ResponseAllOfResultsInnerFromJSON(json: any): FundsGet200ResponseAllOfResultsInner {
    return FundsGet200ResponseAllOfResultsInnerFromJSONTyped(json, false);
}

export function FundsGet200ResponseAllOfResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): FundsGet200ResponseAllOfResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'generalLedgerClass': json['GeneralLedgerClass'] == null ? undefined : json['GeneralLedgerClass'],
        'defaultQuickbooksAccountId': json['DefaultQuickbooksAccountId'] == null ? undefined : json['DefaultQuickbooksAccountId'],
        'quickbooksAccountIds': json['QuickbooksAccountIds'] == null ? undefined : json['QuickbooksAccountIds'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'isDefault': json['IsDefault'] == null ? undefined : json['IsDefault'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
    };
}

export function FundsGet200ResponseAllOfResultsInnerToJSON(json: any): FundsGet200ResponseAllOfResultsInner {
    return FundsGet200ResponseAllOfResultsInnerToJSONTyped(json, false);
}

export function FundsGet200ResponseAllOfResultsInnerToJSONTyped(value?: FundsGet200ResponseAllOfResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'GeneralLedgerClass': value['generalLedgerClass'],
        'DefaultQuickbooksAccountId': value['defaultQuickbooksAccountId'],
        'QuickbooksAccountIds': value['quickbooksAccountIds'],
        'SortIndex': value['sortIndex'],
        'Name': value['name'],
        'IsDefault': value['isDefault'],
        'IsActive': value['isActive'],
    };
}

export const FundsGet200ResponseAllOfResultsInnerPropertyValidationAttributesMap: {
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

