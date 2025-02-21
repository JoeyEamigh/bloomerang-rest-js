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
 * @interface HouseholdOutputModel
 */
export interface HouseholdOutputModel {
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    sortName?: string;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    informalName?: string;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    formalName?: string;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    envelopeName?: string;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    recognitionName?: string;
    /**
     * The ID of the household used in the API (not to be confused with AccountNumber)
     * @type {number}
     * @memberof HouseholdOutputModel
     */
    id?: number;
    /**
     * A user-friendly account number used in the Bloomerang CRM UI (not to be confused with ID).
     * @type {number}
     * @memberof HouseholdOutputModel
     */
    accountNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    type?: HouseholdOutputModelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    status?: HouseholdOutputModelStatusEnum;
    /**
     * The ID of the head of household used in the API (not to be confused with AccountNumber)
     * @type {number}
     * @memberof HouseholdOutputModel
     */
    headId?: number;
    /**
     * The IDs of the members of the household used in the API, including the head of household's ID (not to be confused with AccountNumber)
     * @type {Array<number>}
     * @memberof HouseholdOutputModel
     */
    memberIds?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof HouseholdOutputModel
     */
    communicationRestrictions?: Array<HouseholdOutputModelCommunicationRestrictionsEnum>;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof HouseholdOutputModel
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
    /**
     * True if this constituent is a favorite of the current user
     * @type {boolean}
     * @memberof HouseholdOutputModel
     */
    isFavorite?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HouseholdOutputModel
     */
    engagementScore?: HouseholdOutputModelEngagementScoreEnum;
}

/**
* @export
* @enum {string}
*/
export enum HouseholdOutputModelTypeEnum {
    Household = 'Household'
}
/**
* @export
* @enum {string}
*/
export enum HouseholdOutputModelStatusEnum {
    Active = 'Active',
    Inactive = 'Inactive',
    Deceased = 'Deceased'
}
/**
* @export
* @enum {string}
*/
export enum HouseholdOutputModelCommunicationRestrictionsEnum {
    DoNotCall = 'DoNotCall',
    DoNotMail = 'DoNotMail',
    DoNotSolicit = 'DoNotSolicit'
}
/**
* @export
* @enum {string}
*/
export enum HouseholdOutputModelEngagementScoreEnum {
    Low = 'Low',
    MediumLow = 'MediumLow',
    Medium = 'Medium',
    MediumHigh = 'MediumHigh',
    High = 'High'
}


/**
 * Check if a given object implements the HouseholdOutputModel interface.
 */
export function instanceOfHouseholdOutputModel(value: object): value is HouseholdOutputModel {
    return true;
}

export function HouseholdOutputModelFromJSON(json: any): HouseholdOutputModel {
    return HouseholdOutputModelFromJSONTyped(json, false);
}

export function HouseholdOutputModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): HouseholdOutputModel {
    if (json == null) {
        return json;
    }
    return {
        
        'fullName': json['FullName'] == null ? undefined : json['FullName'],
        'sortName': json['SortName'] == null ? undefined : json['SortName'],
        'informalName': json['InformalName'] == null ? undefined : json['InformalName'],
        'formalName': json['FormalName'] == null ? undefined : json['FormalName'],
        'envelopeName': json['EnvelopeName'] == null ? undefined : json['EnvelopeName'],
        'recognitionName': json['RecognitionName'] == null ? undefined : json['RecognitionName'],
        'id': json['Id'] == null ? undefined : json['Id'],
        'accountNumber': json['AccountNumber'] == null ? undefined : json['AccountNumber'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'status': json['Status'] == null ? undefined : json['Status'],
        'headId': json['HeadId'] == null ? undefined : json['HeadId'],
        'memberIds': json['MemberIds'] == null ? undefined : json['MemberIds'],
        'communicationRestrictions': json['CommunicationRestrictions'] == null ? undefined : json['CommunicationRestrictions'],
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
        'isFavorite': json['IsFavorite'] == null ? undefined : json['IsFavorite'],
        'engagementScore': json['EngagementScore'] == null ? undefined : json['EngagementScore'],
    };
}

export function HouseholdOutputModelToJSON(json: any): HouseholdOutputModel {
    return HouseholdOutputModelToJSONTyped(json, false);
}

export function HouseholdOutputModelToJSONTyped(value?: HouseholdOutputModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'FullName': value['fullName'],
        'SortName': value['sortName'],
        'InformalName': value['informalName'],
        'FormalName': value['formalName'],
        'EnvelopeName': value['envelopeName'],
        'RecognitionName': value['recognitionName'],
        'Id': value['id'],
        'AccountNumber': value['accountNumber'],
        'Type': value['type'],
        'Status': value['status'],
        'HeadId': value['headId'],
        'MemberIds': value['memberIds'],
        'CommunicationRestrictions': value['communicationRestrictions'],
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
        'IsFavorite': value['isFavorite'],
        'EngagementScore': value['engagementScore'],
    };
}

export const HouseholdOutputModelPropertyValidationAttributesMap: {
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

