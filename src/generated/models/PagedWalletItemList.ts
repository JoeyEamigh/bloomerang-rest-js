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
import type { PagedWalletItemListAllOfResults } from './PagedWalletItemListAllOfResults';
import {
    PagedWalletItemListAllOfResultsFromJSON,
    PagedWalletItemListAllOfResultsFromJSONTyped,
    PagedWalletItemListAllOfResultsToJSON,
    PagedWalletItemListAllOfResultsToJSONTyped,
} from './PagedWalletItemListAllOfResults';

/**
 * 
 * @export
 * @interface PagedWalletItemList
 */
export interface PagedWalletItemList {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PagedWalletItemList
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PagedWalletItemList
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PagedWalletItemList
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PagedWalletItemList
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PagedWalletItemListAllOfResults>}
     * @memberof PagedWalletItemList
     */
    results?: Array<PagedWalletItemListAllOfResults>;
}

/**
 * Check if a given object implements the PagedWalletItemList interface.
 */
export function instanceOfPagedWalletItemList(value: object): value is PagedWalletItemList {
    return true;
}

export function PagedWalletItemListFromJSON(json: any): PagedWalletItemList {
    return PagedWalletItemListFromJSONTyped(json, false);
}

export function PagedWalletItemListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedWalletItemList {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PagedWalletItemListAllOfResultsFromJSON)),
    };
}

export function PagedWalletItemListToJSON(json: any): PagedWalletItemList {
    return PagedWalletItemListToJSONTyped(json, false);
}

export function PagedWalletItemListToJSONTyped(value?: PagedWalletItemList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PagedWalletItemListAllOfResultsToJSON)),
    };
}

export const PagedWalletItemListPropertyValidationAttributesMap: {
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

