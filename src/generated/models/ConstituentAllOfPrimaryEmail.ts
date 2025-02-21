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
 * @interface ConstituentAllOfPrimaryEmail
 */
export interface ConstituentAllOfPrimaryEmail {
    /**
     * 
     * @type {number}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    id?: number;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    accountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    type?: ConstituentAllOfPrimaryEmailTypeEnum;
    /**
     * The email address
     * @type {string}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    value?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    isPrimary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    isBad?: boolean;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof ConstituentAllOfPrimaryEmail
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentAllOfPrimaryEmailTypeEnum {
    Home = 'Home',
    Work = 'Work'
}


/**
 * Check if a given object implements the ConstituentAllOfPrimaryEmail interface.
 */
export function instanceOfConstituentAllOfPrimaryEmail(value: object): value is ConstituentAllOfPrimaryEmail {
    return true;
}

export function ConstituentAllOfPrimaryEmailFromJSON(json: any): ConstituentAllOfPrimaryEmail {
    return ConstituentAllOfPrimaryEmailFromJSONTyped(json, false);
}

export function ConstituentAllOfPrimaryEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentAllOfPrimaryEmail {
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

export function ConstituentAllOfPrimaryEmailToJSON(json: any): ConstituentAllOfPrimaryEmail {
    return ConstituentAllOfPrimaryEmailToJSONTyped(json, false);
}

export function ConstituentAllOfPrimaryEmailToJSONTyped(value?: ConstituentAllOfPrimaryEmail | null, ignoreDiscriminator: boolean = false): any {
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

export const ConstituentAllOfPrimaryEmailPropertyValidationAttributesMap: {
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

