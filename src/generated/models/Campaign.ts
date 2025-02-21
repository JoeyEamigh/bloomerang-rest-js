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
 * @interface Campaign
 */
export interface Campaign {
    /**
     * 
     * @type {number}
     * @memberof Campaign
     */
    id?: number;
    /**
     * The total amount raised for this campaign
     * @type {number}
     * @memberof Campaign
     */
    raised?: number;
    /**
     * 
     * @type {Date}
     * @memberof Campaign
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Campaign
     */
    endDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof Campaign
     */
    goal?: number;
    /**
     * 
     * @type {string}
     * @memberof Campaign
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Campaign
     */
    sortIndex?: number;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof Campaign
     */
    isActive?: boolean;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof Campaign
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
}

/**
 * Check if a given object implements the Campaign interface.
 */
export function instanceOfCampaign(value: object): value is Campaign {
    return true;
}

export function CampaignFromJSON(json: any): Campaign {
    return CampaignFromJSONTyped(json, false);
}

export function CampaignFromJSONTyped(json: any, ignoreDiscriminator: boolean): Campaign {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'raised': json['Raised'] == null ? undefined : json['Raised'],
        'startDate': json['StartDate'] == null ? undefined : (new Date(json['StartDate'])),
        'endDate': json['EndDate'] == null ? undefined : (new Date(json['EndDate'])),
        'goal': json['Goal'] == null ? undefined : json['Goal'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
    };
}

export function CampaignToJSON(json: any): Campaign {
    return CampaignToJSONTyped(json, false);
}

export function CampaignToJSONTyped(value?: Campaign | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Raised': value['raised'],
        'StartDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString().substring(0,10)),
        'EndDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString().substring(0,10)),
        'Goal': value['goal'],
        'Name': value['name'],
        'SortIndex': value['sortIndex'],
        'IsActive': value['isActive'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
    };
}

export const CampaignPropertyValidationAttributesMap: {
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

