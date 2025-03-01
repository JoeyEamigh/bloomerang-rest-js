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
import type { SoftcreditsGet200ResponseAllOfResultsInner } from './SoftcreditsGet200ResponseAllOfResultsInner';
import {
    SoftcreditsGet200ResponseAllOfResultsInnerFromJSON,
    SoftcreditsGet200ResponseAllOfResultsInnerFromJSONTyped,
    SoftcreditsGet200ResponseAllOfResultsInnerToJSON,
    SoftcreditsGet200ResponseAllOfResultsInnerToJSONTyped,
} from './SoftcreditsGet200ResponseAllOfResultsInner';

/**
 * 
 * @export
 * @interface SoftcreditsGet200Response
 */
export interface SoftcreditsGet200Response {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof SoftcreditsGet200Response
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof SoftcreditsGet200Response
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof SoftcreditsGet200Response
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof SoftcreditsGet200Response
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<SoftcreditsGet200ResponseAllOfResultsInner>}
     * @memberof SoftcreditsGet200Response
     */
    results?: Array<SoftcreditsGet200ResponseAllOfResultsInner>;
}

/**
 * Check if a given object implements the SoftcreditsGet200Response interface.
 */
export function instanceOfSoftcreditsGet200Response(value: object): value is SoftcreditsGet200Response {
    return true;
}

export function SoftcreditsGet200ResponseFromJSON(json: any): SoftcreditsGet200Response {
    return SoftcreditsGet200ResponseFromJSONTyped(json, false);
}

export function SoftcreditsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SoftcreditsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(SoftcreditsGet200ResponseAllOfResultsInnerFromJSON)),
    };
}

export function SoftcreditsGet200ResponseToJSON(json: any): SoftcreditsGet200Response {
    return SoftcreditsGet200ResponseToJSONTyped(json, false);
}

export function SoftcreditsGet200ResponseToJSONTyped(value?: SoftcreditsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(SoftcreditsGet200ResponseAllOfResultsInnerToJSON)),
    };
}

export const SoftcreditsGet200ResponsePropertyValidationAttributesMap: {
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

