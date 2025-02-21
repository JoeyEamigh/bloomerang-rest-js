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
import type { PledgeIdInstallmentsGet200ResponseAllOfResultsInner } from './PledgeIdInstallmentsGet200ResponseAllOfResultsInner';
import {
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSON,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSONTyped,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSON,
    PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSONTyped,
} from './PledgeIdInstallmentsGet200ResponseAllOfResultsInner';

/**
 * 
 * @export
 * @interface PledgeIdInstallmentsGet200Response
 */
export interface PledgeIdInstallmentsGet200Response {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof PledgeIdInstallmentsGet200Response
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof PledgeIdInstallmentsGet200Response
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof PledgeIdInstallmentsGet200Response
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof PledgeIdInstallmentsGet200Response
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<PledgeIdInstallmentsGet200ResponseAllOfResultsInner>}
     * @memberof PledgeIdInstallmentsGet200Response
     */
    results?: Array<PledgeIdInstallmentsGet200ResponseAllOfResultsInner>;
}

/**
 * Check if a given object implements the PledgeIdInstallmentsGet200Response interface.
 */
export function instanceOfPledgeIdInstallmentsGet200Response(value: object): value is PledgeIdInstallmentsGet200Response {
    return true;
}

export function PledgeIdInstallmentsGet200ResponseFromJSON(json: any): PledgeIdInstallmentsGet200Response {
    return PledgeIdInstallmentsGet200ResponseFromJSONTyped(json, false);
}

export function PledgeIdInstallmentsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PledgeIdInstallmentsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(PledgeIdInstallmentsGet200ResponseAllOfResultsInnerFromJSON)),
    };
}

export function PledgeIdInstallmentsGet200ResponseToJSON(json: any): PledgeIdInstallmentsGet200Response {
    return PledgeIdInstallmentsGet200ResponseToJSONTyped(json, false);
}

export function PledgeIdInstallmentsGet200ResponseToJSONTyped(value?: PledgeIdInstallmentsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(PledgeIdInstallmentsGet200ResponseAllOfResultsInnerToJSON)),
    };
}

export const PledgeIdInstallmentsGet200ResponsePropertyValidationAttributesMap: {
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

