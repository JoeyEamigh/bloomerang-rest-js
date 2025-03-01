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
import type { ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel } from './ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel';
import {
    ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelFromJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelFromJSONTyped,
    ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelToJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelToJSONTyped,
} from './ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel';
import type { ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests } from './ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests';
import {
    ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsFromJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsFromJSONTyped,
    ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsToJSON,
    ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsToJSONTyped,
} from './ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests';
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
 * @interface ConstituentCommunicationSettingsUpdateModel
 */
export interface ConstituentCommunicationSettingsUpdateModel {
    /**
     * The ID of the constituent used in the API (not to be confused with AccountNumber)
     * @type {number}
     * @memberof ConstituentCommunicationSettingsUpdateModel
     */
    id?: number;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions}
     * @memberof ConstituentCommunicationSettingsUpdateModel
     */
    communicationRestrictions?: ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel}
     * @memberof ConstituentCommunicationSettingsUpdateModel
     */
    preferredChannel?: ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests}
     * @memberof ConstituentCommunicationSettingsUpdateModel
     */
    emailInterests?: ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests;
}

/**
 * Check if a given object implements the ConstituentCommunicationSettingsUpdateModel interface.
 */
export function instanceOfConstituentCommunicationSettingsUpdateModel(value: object): value is ConstituentCommunicationSettingsUpdateModel {
    return true;
}

export function ConstituentCommunicationSettingsUpdateModelFromJSON(json: any): ConstituentCommunicationSettingsUpdateModel {
    return ConstituentCommunicationSettingsUpdateModelFromJSONTyped(json, false);
}

export function ConstituentCommunicationSettingsUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentCommunicationSettingsUpdateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'communicationRestrictions': json['CommunicationRestrictions'] == null ? undefined : ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsFromJSON(json['CommunicationRestrictions']),
        'preferredChannel': json['PreferredChannel'] == null ? undefined : ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelFromJSON(json['PreferredChannel']),
        'emailInterests': json['EmailInterests'] == null ? undefined : ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsFromJSON(json['EmailInterests']),
    };
}

export function ConstituentCommunicationSettingsUpdateModelToJSON(json: any): ConstituentCommunicationSettingsUpdateModel {
    return ConstituentCommunicationSettingsUpdateModelToJSONTyped(json, false);
}

export function ConstituentCommunicationSettingsUpdateModelToJSONTyped(value?: ConstituentCommunicationSettingsUpdateModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'CommunicationRestrictions': ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictionsToJSON(value['communicationRestrictions']),
        'PreferredChannel': ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannelToJSON(value['preferredChannel']),
        'EmailInterests': ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterestsToJSON(value['emailInterests']),
    };
}

export const ConstituentCommunicationSettingsUpdateModelPropertyValidationAttributesMap: {
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

