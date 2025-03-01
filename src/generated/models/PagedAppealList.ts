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
import type { PagedAppealListAllOfResults } from './PagedAppealListAllOfResults';
import {
    PagedAppealListAllOfResultsFromJSON,
    PagedAppealListAllOfResultsFromJSONTyped,
    PagedAppealListAllOfResultsToJSON,
    PagedAppealListAllOfResultsToJSONTyped,
} from './PagedAppealListAllOfResults';

/**
 * 
 * @export
 * @interface PagedAppealList
 */
export interface PagedAppealList {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PagedAppealList
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PagedAppealList
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PagedAppealList
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PagedAppealList
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PagedAppealListAllOfResults>}
     * @memberof PagedAppealList
     */
    results?: Array<PagedAppealListAllOfResults>;
}

/**
 * Check if a given object implements the PagedAppealList interface.
 */
export function instanceOfPagedAppealList(value: object): value is PagedAppealList {
    return true;
}

export function PagedAppealListFromJSON(json: any): PagedAppealList {
    return PagedAppealListFromJSONTyped(json, false);
}

export function PagedAppealListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedAppealList {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PagedAppealListAllOfResultsFromJSON)),
    };
}

export function PagedAppealListToJSON(json: any): PagedAppealList {
    return PagedAppealListToJSONTyped(json, false);
}

export function PagedAppealListToJSONTyped(value?: PagedAppealList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PagedAppealListAllOfResultsToJSON)),
    };
}

export const PagedAppealListPropertyValidationAttributesMap: {
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

