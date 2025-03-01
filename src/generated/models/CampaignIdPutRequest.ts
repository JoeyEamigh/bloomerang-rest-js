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
/**
 * 
 * @export
 * @interface CampaignIdPutRequest
 */
export interface CampaignIdPutRequest {
    /**
     * 
     * @type {number}
     * @memberof CampaignIdPutRequest
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof CampaignIdPutRequest
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CampaignIdPutRequest
     */
    endDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof CampaignIdPutRequest
     */
    goal?: number;
    /**
     * 
     * @type {string}
     * @memberof CampaignIdPutRequest
     */
    name?: string;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof CampaignIdPutRequest
     */
    isActive?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CampaignIdPutRequest
     */
    sortIndex?: number;
}

/**
 * Check if a given object implements the CampaignIdPutRequest interface.
 */
export function instanceOfCampaignIdPutRequest(value: object): value is CampaignIdPutRequest {
    return true;
}

export function CampaignIdPutRequestFromJSON(json: any): CampaignIdPutRequest {
    return CampaignIdPutRequestFromJSONTyped(json, false);
}

export function CampaignIdPutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignIdPutRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'startDate': json['StartDate'] == null ? undefined : (new Date(json['StartDate'])),
        'endDate': json['EndDate'] == null ? undefined : (new Date(json['EndDate'])),
        'goal': json['Goal'] == null ? undefined : json['Goal'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
    };
}

export function CampaignIdPutRequestToJSON(json: any): CampaignIdPutRequest {
    return CampaignIdPutRequestToJSONTyped(json, false);
}

export function CampaignIdPutRequestToJSONTyped(value?: CampaignIdPutRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'StartDate': value['startDate'] == null ? undefined : ((value['startDate']).toISOString().substring(0,10)),
        'EndDate': value['endDate'] == null ? undefined : ((value['endDate']).toISOString().substring(0,10)),
        'Goal': value['goal'],
        'Name': value['name'],
        'IsActive': value['isActive'],
        'SortIndex': value['sortIndex'],
    };
}

export const CampaignIdPutRequestPropertyValidationAttributesMap: {
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

