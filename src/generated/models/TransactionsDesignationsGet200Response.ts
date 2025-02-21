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
import type { TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner } from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner';
import {
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSONTyped,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSON,
    TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSONTyped,
} from './TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner';

/**
 * 
 * @export
 * @interface TransactionsDesignationsGet200Response
 */
export interface TransactionsDesignationsGet200Response {
    /**
     * The total number of records in Bloomerang.
     * @type {number}
     * @memberof TransactionsDesignationsGet200Response
     */
    total?: number;
    /**
     * The total number of records that match the filters.
     * @type {number}
     * @memberof TransactionsDesignationsGet200Response
     */
    totalFiltered?: number;
    /**
     * The 0-based index of the first record.
     * @type {number}
     * @memberof TransactionsDesignationsGet200Response
     */
    start?: number;
    /**
     * The number of records included in the result set.
     * @type {number}
     * @memberof TransactionsDesignationsGet200Response
     */
    resultCount?: number;
    /**
     * 
     * @type {Array<TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner>}
     * @memberof TransactionsDesignationsGet200Response
     */
    results?: Array<TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInner>;
}

/**
 * Check if a given object implements the TransactionsDesignationsGet200Response interface.
 */
export function instanceOfTransactionsDesignationsGet200Response(value: object): value is TransactionsDesignationsGet200Response {
    return true;
}

export function TransactionsDesignationsGet200ResponseFromJSON(json: any): TransactionsDesignationsGet200Response {
    return TransactionsDesignationsGet200ResponseFromJSONTyped(json, false);
}

export function TransactionsDesignationsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionsDesignationsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'total': json['Total'] == null ? undefined : json['Total'],
        'totalFiltered': json['TotalFiltered'] == null ? undefined : json['TotalFiltered'],
        'start': json['Start'] == null ? undefined : json['Start'],
        'resultCount': json['ResultCount'] == null ? undefined : json['ResultCount'],
        'results': json['Results'] == null ? undefined : ((json['Results'] as Array<any>).map(TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerFromJSON)),
    };
}

export function TransactionsDesignationsGet200ResponseToJSON(json: any): TransactionsDesignationsGet200Response {
    return TransactionsDesignationsGet200ResponseToJSONTyped(json, false);
}

export function TransactionsDesignationsGet200ResponseToJSONTyped(value?: TransactionsDesignationsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Total': value['total'],
        'TotalFiltered': value['totalFiltered'],
        'Start': value['start'],
        'ResultCount': value['resultCount'],
        'Results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(TransactionsGet200ResponseAllOfResultsInnerAllOfDesignationsInnerToJSON)),
    };
}

export const TransactionsDesignationsGet200ResponsePropertyValidationAttributesMap: {
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

