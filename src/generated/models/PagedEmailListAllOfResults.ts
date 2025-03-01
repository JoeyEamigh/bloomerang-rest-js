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
import type { CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail } from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';
import {
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSONTyped,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON,
    CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSONTyped,
} from './CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail';

/**
 * 
 * @export
 * @interface PagedEmailListAllOfResults
 */
export interface PagedEmailListAllOfResults {
    /**
     * 
     * @type {number}
     * @memberof PagedEmailListAllOfResults
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof PagedEmailListAllOfResults
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof PagedEmailListAllOfResults
     */
    type?: PagedEmailListAllOfResultsTypeEnum;
    /**
     * The email address
     * @type {string}
     * @memberof PagedEmailListAllOfResults
     */
    value?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PagedEmailListAllOfResults
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PagedEmailListAllOfResults
     */
    isBad?: boolean;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof PagedEmailListAllOfResults
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
}

/**
* @export
* @enum {string}
*/
export enum PagedEmailListAllOfResultsTypeEnum {
    Home = 'Home',
    Work = 'Work'
}


/**
 * Check if a given object implements the PagedEmailListAllOfResults interface.
 */
export function instanceOfPagedEmailListAllOfResults(value: object): value is PagedEmailListAllOfResults {
    return true;
}

export function PagedEmailListAllOfResultsFromJSON(json: any): PagedEmailListAllOfResults {
    return PagedEmailListAllOfResultsFromJSONTyped(json, false);
}

export function PagedEmailListAllOfResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedEmailListAllOfResults {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'value': json['Value'] == null ? undefined : json['Value'],
        'isPrimary': json['IsPrimary'] == null ? undefined : json['IsPrimary'],
        'isBad': json['IsBad'] == null ? undefined : json['IsBad'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
    };
}

export function PagedEmailListAllOfResultsToJSON(json: any): PagedEmailListAllOfResults {
    return PagedEmailListAllOfResultsToJSONTyped(json, false);
}

export function PagedEmailListAllOfResultsToJSONTyped(value?: PagedEmailListAllOfResults | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'AccountId': value['accountId'],
        'Type': value['type'],
        'Value': value['value'],
        'IsPrimary': value['isPrimary'],
        'IsBad': value['isBad'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
    };
}

export const PagedEmailListAllOfResultsPropertyValidationAttributesMap: {
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

