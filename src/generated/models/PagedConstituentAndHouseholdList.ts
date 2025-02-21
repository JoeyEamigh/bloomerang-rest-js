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
import type { PagedConstituentAndHouseholdListAllOfResults } from './PagedConstituentAndHouseholdListAllOfResults';
import {
    PagedConstituentAndHouseholdListAllOfResultsFromJSON,
    PagedConstituentAndHouseholdListAllOfResultsFromJSONTyped,
    PagedConstituentAndHouseholdListAllOfResultsToJSON,
    PagedConstituentAndHouseholdListAllOfResultsToJSONTyped,
} from './PagedConstituentAndHouseholdListAllOfResults';

/**
 * 
 * @export
 * @interface PagedConstituentAndHouseholdList
 */
export interface PagedConstituentAndHouseholdList {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PagedConstituentAndHouseholdList
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PagedConstituentAndHouseholdList
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PagedConstituentAndHouseholdList
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PagedConstituentAndHouseholdList
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PagedConstituentAndHouseholdListAllOfResults>}
     * @memberof PagedConstituentAndHouseholdList
     */
    results?: Array<PagedConstituentAndHouseholdListAllOfResults>;
}

/**
 * Check if a given object implements the PagedConstituentAndHouseholdList interface.
 */
export function instanceOfPagedConstituentAndHouseholdList(value: object): value is PagedConstituentAndHouseholdList {
    return true;
}

export function PagedConstituentAndHouseholdListFromJSON(json: any): PagedConstituentAndHouseholdList {
    return PagedConstituentAndHouseholdListFromJSONTyped(json, false);
}

export function PagedConstituentAndHouseholdListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedConstituentAndHouseholdList {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PagedConstituentAndHouseholdListAllOfResultsFromJSON)),
    };
}

export function PagedConstituentAndHouseholdListToJSON(json: any): PagedConstituentAndHouseholdList {
    return PagedConstituentAndHouseholdListToJSONTyped(json, false);
}

export function PagedConstituentAndHouseholdListToJSONTyped(value?: PagedConstituentAndHouseholdList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PagedConstituentAndHouseholdListAllOfResultsToJSON)),
    };
}

export const PagedConstituentAndHouseholdListPropertyValidationAttributesMap: {
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

