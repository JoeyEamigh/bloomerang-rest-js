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
 * @interface PagedFundListAllOfResults
 */
export interface PagedFundListAllOfResults {
    /**
     * 
     * @type {number}
     * @memberof PagedFundListAllOfResults
     */
    id?: number;
    /**
     * The class label for this fund in the general ledger (quickbooks)
     * @type {string}
     * @memberof PagedFundListAllOfResults
     */
    generalLedgerClass?: string;
    /**
     * The ID of the general ledger (quickbooks) account to which this fund will default
     * @type {number}
     * @memberof PagedFundListAllOfResults
     */
    defaultQuickbooksAccountId?: number;
    /**
     * The IDs of all general ledger (quickbooks) accounts associated with this fund
     * @type {Array<number>}
     * @memberof PagedFundListAllOfResults
     */
    quickbooksAccountIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof PagedFundListAllOfResults
     */
    sortIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof PagedFundListAllOfResults
     */
    name?: string;
    /**
     * Is this the default?
     * @type {boolean}
     * @memberof PagedFundListAllOfResults
     */
    isDefault?: boolean;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof PagedFundListAllOfResults
     */
    isActive?: boolean;
}

/**
 * Check if a given object implements the PagedFundListAllOfResults interface.
 */
export function instanceOfPagedFundListAllOfResults(value: object): value is PagedFundListAllOfResults {
    return true;
}

export function PagedFundListAllOfResultsFromJSON(json: any): PagedFundListAllOfResults {
    return PagedFundListAllOfResultsFromJSONTyped(json, false);
}

export function PagedFundListAllOfResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedFundListAllOfResults {
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

export function PagedFundListAllOfResultsToJSON(json: any): PagedFundListAllOfResults {
    return PagedFundListAllOfResultsToJSONTyped(json, false);
}

export function PagedFundListAllOfResultsToJSONTyped(value?: PagedFundListAllOfResults | null, ignoreDiscriminator: boolean = false): any {
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

export const PagedFundListAllOfResultsPropertyValidationAttributesMap: {
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

