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
import type { InteractionAllOfCustomValues } from './InteractionAllOfCustomValues';
import {
    InteractionAllOfCustomValuesFromJSON,
    InteractionAllOfCustomValuesFromJSONTyped,
    InteractionAllOfCustomValuesToJSON,
    InteractionAllOfCustomValuesToJSONTyped,
} from './InteractionAllOfCustomValues';

/**
 * 
 * @export
 * @interface Interaction
 */
export interface Interaction {
    /**
     * 
     * @type {number}
     * @memberof Interaction
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof Interaction
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    channel?: InteractionChannelEnum;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    purpose?: InteractionPurposeEnum;
    /**
     * 
     * @type {string}
     * @memberof Interaction
     */
    subject?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Interaction
     */
    isInbound?: boolean;
    /**
     * The ID of the constituent used in the API (not to be confused with accountNumber)
     * @type {number}
     * @memberof Interaction
     */
    accountId?: number;
    /**
     * If the Channel is Twitter, this contains the ID of the tweet that can be used to display the tweet by substituting into https://twitter.com/anyUser/status/{TweetId}
     * @type {string}
     * @memberof Interaction
     */
    tweetId?: string;
    /**
     * Whether or not this interaction was created by an email that was sent to Bloomerang via BCC
     * @type {boolean}
     * @memberof Interaction
     */
    isBcc?: boolean;
    /**
     * If the interaction is an email interaction, this is the email address of the constituent that received the email. Only populated when IsBcc is true.
     * @type {string}
     * @memberof Interaction
     */
    emailAddress?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof Interaction
     */
    attachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Interaction
     */
    letterAttachmentIds?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Interaction
     */
    surveyLapsedResponses?: Array<string>;
    /**
     * Whether this interaction represents a donor survey response
     * @type {boolean}
     * @memberof Interaction
     */
    isEngagementSurveyResponse?: boolean;
    /**
     * The interaction ID of the survey email that was sent to the donor.  Only populated when IsEngagementSurveyResponse is true
     * @type {number}
     * @memberof Interaction
     */
    surveyEmailInteractionId?: number;
    /**
     * Whether this interaction represents a survey email that was sent to the donor
     * @type {boolean}
     * @memberof Interaction
     */
    isEngagementSurveyEmail?: boolean;
    /**
     * The interaction ID of the survey response.  Only populated when IsEngagementSurveyEmail is true.
     * @type {number}
     * @memberof Interaction
     */
    surveyResponseInteractionId?: number;
    /**
     * 
     * @type {Array<InteractionAllOfCustomValues>}
     * @memberof Interaction
     */
    customValues?: Array<InteractionAllOfCustomValues>;
    /**
     * 
     * @type {CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail}
     * @memberof Interaction
     */
    auditTrail?: CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrail;
}

/**
* @export
* @enum {string}
*/
export enum InteractionChannelEnum {
    Email = 'Email',
    MassEmail = 'MassEmail',
    Phone = 'Phone',
    TextMessage = 'TextMessage',
    Mail = 'Mail',
    InPerson = 'InPerson',
    SocialMedia = 'SocialMedia',
    Website = 'Website',
    Twitter = 'Twitter',
    Other = 'Other',
    EngagementSurveyEmail = 'EngagementSurveyEmail',
    EngagementSurvey = 'EngagementSurvey'
}
/**
* @export
* @enum {string}
*/
export enum InteractionPurposeEnum {
    Acknowledgement = 'Acknowledgement',
    ImpactCultivation = 'ImpactCultivation',
    Newsletter = 'Newsletter',
    Receipt = 'Receipt',
    Solicitation = 'Solicitation',
    SpecialEvent = 'SpecialEvent',
    VolunteerActivity = 'VolunteerActivity',
    PledgeReminder = 'PledgeReminder',
    Welcome = 'Welcome',
    BenevonPointOfEntry = 'BenevonPointOfEntry',
    BenevonFollowUp = 'BenevonFollowUp',
    BenevonAskEvent = 'BenevonAskEvent',
    BenevonOneOnOneAsk = 'BenevonOneOnOneAsk',
    BenevonOngoingCultivation = 'BenevonOngoingCultivation',
    Other = 'Other'
}


/**
 * Check if a given object implements the Interaction interface.
 */
export function instanceOfInteraction(value: object): value is Interaction {
    return true;
}

export function InteractionFromJSON(json: any): Interaction {
    return InteractionFromJSONTyped(json, false);
}

export function InteractionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Interaction {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'date': json['Date'] == null ? undefined : (new Date(json['Date'])),
        'note': json['Note'] == null ? undefined : json['Note'],
        'channel': json['Channel'] == null ? undefined : json['Channel'],
        'purpose': json['Purpose'] == null ? undefined : json['Purpose'],
        'subject': json['Subject'] == null ? undefined : json['Subject'],
        'isInbound': json['IsInbound'] == null ? undefined : json['IsInbound'],
        'accountId': json['AccountId'] == null ? undefined : json['AccountId'],
        'tweetId': json['TweetId'] == null ? undefined : json['TweetId'],
        'isBcc': json['IsBcc'] == null ? undefined : json['IsBcc'],
        'emailAddress': json['EmailAddress'] == null ? undefined : json['EmailAddress'],
        'attachmentIds': json['AttachmentIds'] == null ? undefined : json['AttachmentIds'],
        'letterAttachmentIds': json['LetterAttachmentIds'] == null ? undefined : json['LetterAttachmentIds'],
        'surveyLapsedResponses': json['SurveyLapsedResponses'] == null ? undefined : json['SurveyLapsedResponses'],
        'isEngagementSurveyResponse': json['IsEngagementSurveyResponse'] == null ? undefined : json['IsEngagementSurveyResponse'],
        'surveyEmailInteractionId': json['SurveyEmailInteractionId'] == null ? undefined : json['SurveyEmailInteractionId'],
        'isEngagementSurveyEmail': json['IsEngagementSurveyEmail'] == null ? undefined : json['IsEngagementSurveyEmail'],
        'surveyResponseInteractionId': json['SurveyResponseInteractionId'] == null ? undefined : json['SurveyResponseInteractionId'],
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(InteractionAllOfCustomValuesFromJSON)),
        'auditTrail': json['AuditTrail'] == null ? undefined : CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailFromJSON(json['AuditTrail']),
    };
}

export function InteractionToJSON(json: any): Interaction {
    return InteractionToJSONTyped(json, false);
}

export function InteractionToJSONTyped(value?: Interaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Date': value['date'] == null ? undefined : ((value['date']).toISOString().substring(0,10)),
        'Note': value['note'],
        'Channel': value['channel'],
        'Purpose': value['purpose'],
        'Subject': value['subject'],
        'IsInbound': value['isInbound'],
        'AccountId': value['accountId'],
        'TweetId': value['tweetId'],
        'IsBcc': value['isBcc'],
        'EmailAddress': value['emailAddress'],
        'AttachmentIds': value['attachmentIds'],
        'LetterAttachmentIds': value['letterAttachmentIds'],
        'SurveyLapsedResponses': value['surveyLapsedResponses'],
        'IsEngagementSurveyResponse': value['isEngagementSurveyResponse'],
        'SurveyEmailInteractionId': value['surveyEmailInteractionId'],
        'IsEngagementSurveyEmail': value['isEngagementSurveyEmail'],
        'SurveyResponseInteractionId': value['surveyResponseInteractionId'],
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(InteractionAllOfCustomValuesToJSON)),
        'AuditTrail': CampaignsGet200ResponseAllOfResultsInnerAllOfAuditTrailToJSON(value['auditTrail']),
    };
}

export const InteractionPropertyValidationAttributesMap: {
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

