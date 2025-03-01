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
 * @interface ConstituentIdUpdateCommunicationSettingsPutRequest
 */
export interface ConstituentIdUpdateCommunicationSettingsPutRequest {
    /**
     * The ID of the constituent used in the API (not to be confused with AccountNumber)
     * @type {number}
     * @memberof ConstituentIdUpdateCommunicationSettingsPutRequest
     */
    id?: number;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions}
     * @memberof ConstituentIdUpdateCommunicationSettingsPutRequest
     */
    communicationRestrictions?: ConstituentIdUpdateCommunicationSettingsPutRequestCommunicationRestrictions;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel}
     * @memberof ConstituentIdUpdateCommunicationSettingsPutRequest
     */
    preferredChannel?: ConstituentIdUpdateCommunicationSettingsPutRequestPreferredChannel;
    /**
     * 
     * @type {ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests}
     * @memberof ConstituentIdUpdateCommunicationSettingsPutRequest
     */
    emailInterests?: ConstituentIdUpdateCommunicationSettingsPutRequestEmailInterests;
}

/**
 * Check if a given object implements the ConstituentIdUpdateCommunicationSettingsPutRequest interface.
 */
export function instanceOfConstituentIdUpdateCommunicationSettingsPutRequest(value: object): value is ConstituentIdUpdateCommunicationSettingsPutRequest {
    return true;
}

export function ConstituentIdUpdateCommunicationSettingsPutRequestFromJSON(json: any): ConstituentIdUpdateCommunicationSettingsPutRequest {
    return ConstituentIdUpdateCommunicationSettingsPutRequestFromJSONTyped(json, false);
}

export function ConstituentIdUpdateCommunicationSettingsPutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentIdUpdateCommunicationSettingsPutRequest {
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

export function ConstituentIdUpdateCommunicationSettingsPutRequestToJSON(json: any): ConstituentIdUpdateCommunicationSettingsPutRequest {
    return ConstituentIdUpdateCommunicationSettingsPutRequestToJSONTyped(json, false);
}

export function ConstituentIdUpdateCommunicationSettingsPutRequestToJSONTyped(value?: ConstituentIdUpdateCommunicationSettingsPutRequest | null, ignoreDiscriminator: boolean = false): any {
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

export const ConstituentIdUpdateCommunicationSettingsPutRequestPropertyValidationAttributesMap: {
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

