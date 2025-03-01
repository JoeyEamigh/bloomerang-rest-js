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
 * @interface CampaignUpdateModel
 */
export interface CampaignUpdateModel {
    /**
     * 
     * @type {number}
     * @memberof CampaignUpdateModel
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof CampaignUpdateModel
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CampaignUpdateModel
     */
    endDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof CampaignUpdateModel
     */
    goal?: number;
    /**
     * 
     * @type {string}
     * @memberof CampaignUpdateModel
     */
    name?: string;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof CampaignUpdateModel
     */
    isActive?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CampaignUpdateModel
     */
    sortIndex?: number;
}

/**
 * Check if a given object implements the CampaignUpdateModel interface.
 */
export function instanceOfCampaignUpdateModel(value: object): value is CampaignUpdateModel {
    return true;
}

export function CampaignUpdateModelFromJSON(json: any): CampaignUpdateModel {
    return CampaignUpdateModelFromJSONTyped(json, false);
}

export function CampaignUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignUpdateModel {
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

export function CampaignUpdateModelToJSON(json: any): CampaignUpdateModel {
    return CampaignUpdateModelToJSONTyped(json, false);
}

export function CampaignUpdateModelToJSONTyped(value?: CampaignUpdateModel | null, ignoreDiscriminator: boolean = false): any {
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

export const CampaignUpdateModelPropertyValidationAttributesMap: {
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

