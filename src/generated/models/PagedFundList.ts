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
import type { PagedFundListAllOfResults } from './PagedFundListAllOfResults';
import {
    PagedFundListAllOfResultsFromJSON,
    PagedFundListAllOfResultsFromJSONTyped,
    PagedFundListAllOfResultsToJSON,
    PagedFundListAllOfResultsToJSONTyped,
} from './PagedFundListAllOfResults';

/**
 * 
 * @export
 * @interface PagedFundList
 */
export interface PagedFundList {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PagedFundList
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PagedFundList
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PagedFundList
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PagedFundList
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PagedFundListAllOfResults>}
     * @memberof PagedFundList
     */
    results?: Array<PagedFundListAllOfResults>;
}

/**
 * Check if a given object implements the PagedFundList interface.
 */
export function instanceOfPagedFundList(value: object): value is PagedFundList {
    return true;
}

export function PagedFundListFromJSON(json: any): PagedFundList {
    return PagedFundListFromJSONTyped(json, false);
}

export function PagedFundListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedFundList {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PagedFundListAllOfResultsFromJSON)),
    };
}

export function PagedFundListToJSON(json: any): PagedFundList {
    return PagedFundListToJSONTyped(json, false);
}

export function PagedFundListToJSONTyped(value?: PagedFundList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PagedFundListAllOfResultsToJSON)),
    };
}

export const PagedFundListPropertyValidationAttributesMap: {
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

