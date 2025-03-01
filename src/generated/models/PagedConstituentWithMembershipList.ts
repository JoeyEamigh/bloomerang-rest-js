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
import type { PagedConstituentWithMembershipListAllOfResults } from './PagedConstituentWithMembershipListAllOfResults';
import {
    PagedConstituentWithMembershipListAllOfResultsFromJSON,
    PagedConstituentWithMembershipListAllOfResultsFromJSONTyped,
    PagedConstituentWithMembershipListAllOfResultsToJSON,
    PagedConstituentWithMembershipListAllOfResultsToJSONTyped,
} from './PagedConstituentWithMembershipListAllOfResults';

/**
 * 
 * @export
 * @interface PagedConstituentWithMembershipList
 */
export interface PagedConstituentWithMembershipList {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PagedConstituentWithMembershipList
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PagedConstituentWithMembershipList
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PagedConstituentWithMembershipList
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PagedConstituentWithMembershipList
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PagedConstituentWithMembershipListAllOfResults>}
     * @memberof PagedConstituentWithMembershipList
     */
    results?: Array<PagedConstituentWithMembershipListAllOfResults>;
}

/**
 * Check if a given object implements the PagedConstituentWithMembershipList interface.
 */
export function instanceOfPagedConstituentWithMembershipList(value: object): value is PagedConstituentWithMembershipList {
    return true;
}

export function PagedConstituentWithMembershipListFromJSON(json: any): PagedConstituentWithMembershipList {
    return PagedConstituentWithMembershipListFromJSONTyped(json, false);
}

export function PagedConstituentWithMembershipListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedConstituentWithMembershipList {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PagedConstituentWithMembershipListAllOfResultsFromJSON)),
    };
}

export function PagedConstituentWithMembershipListToJSON(json: any): PagedConstituentWithMembershipList {
    return PagedConstituentWithMembershipListToJSONTyped(json, false);
}

export function PagedConstituentWithMembershipListToJSONTyped(value?: PagedConstituentWithMembershipList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PagedConstituentWithMembershipListAllOfResultsToJSON)),
    };
}

export const PagedConstituentWithMembershipListPropertyValidationAttributesMap: {
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

