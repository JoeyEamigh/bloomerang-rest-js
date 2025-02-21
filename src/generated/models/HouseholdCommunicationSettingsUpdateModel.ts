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
import type { ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions } from './ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions';
import {
    ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsFromJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsFromJSONTyped,
    ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsToJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsToJSONTyped,
} from './ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions';

/**
 * 
 * @export
 * @interface HouseholdCommunicationSettingsUpdateModel
 */
export interface HouseholdCommunicationSettingsUpdateModel {
    /**
     * The ID of the household used in the API (not to be confused with AccountNumber)
     * @type {number}
     * @memberof HouseholdCommunicationSettingsUpdateModel
     */
    id?: number;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions}
     * @memberof HouseholdCommunicationSettingsUpdateModel
     */
    communicationRestrictions?: ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions;
}

/**
 * Check if a given object implements the HouseholdCommunicationSettingsUpdateModel interface.
 */
export function instanceOfHouseholdCommunicationSettingsUpdateModel(value: object): value is HouseholdCommunicationSettingsUpdateModel {
    return true;
}

export function HouseholdCommunicationSettingsUpdateModelFromJSON(json: any): HouseholdCommunicationSettingsUpdateModel {
    return HouseholdCommunicationSettingsUpdateModelFromJSONTyped(json, false);
}

export function HouseholdCommunicationSettingsUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): HouseholdCommunicationSettingsUpdateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'communicationRestrictions': json['CommunicationRestrictions'] == null ? undefined : ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsFromJSON(json['CommunicationRestrictions']),
    };
}

export function HouseholdCommunicationSettingsUpdateModelToJSON(json: any): HouseholdCommunicationSettingsUpdateModel {
    return HouseholdCommunicationSettingsUpdateModelToJSONTyped(json, false);
}

export function HouseholdCommunicationSettingsUpdateModelToJSONTyped(value?: HouseholdCommunicationSettingsUpdateModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'CommunicationRestrictions': ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsToJSON(value['communicationRestrictions']),
    };
}

export const HouseholdCommunicationSettingsUpdateModelPropertyValidationAttributesMap: {
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

