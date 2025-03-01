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
 * @interface ConstituentCreateModel
 */
export interface ConstituentCreateModel {
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    type: ConstituentCreateModelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    status?: ConstituentCreateModelStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    middleName?: string;
    /**
     * Must match a prefix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    prefix?: string;
    /**
     * Must match a suffix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    suffix?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    informalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    formalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    envelopeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    recognitionName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    jobTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    employer?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    facebookId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    twitterId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    linkedInId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    gender?: ConstituentCreateModelGenderEnum;
    /**
     * 
     * @type {Date}
     * @memberof ConstituentCreateModel
     */
    birthdate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    profilePictureType?: ConstituentCreateModelProfilePictureTypeEnum;
    /**
     * 
     * @type {object}
     * @memberof ConstituentCreateModel
     */
    primaryPhone?: object;
    /**
     * 
     * @type {object}
     * @memberof ConstituentCreateModel
     */
    primaryAddress?: object;
    /**
     * Non-primary addresses
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    secondaryAddresses?: Array<object>;
    /**
     * Non-primary email addresses
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    secondaryEmails?: Array<object>;
    /**
     * Non-primary phones
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    secondaryPhones?: Array<object>;
    /**
     * The full picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    fullCustomProfileImage?: Array<object>;
    /**
     * The cropped picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    croppedCustomProfileImage?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof ConstituentCreateModel
     */
    customValues?: Array<object>;
    /**
     * The ID of the household this constituent is in (not to be confused with AccountNumber)
     * @type {number}
     * @memberof ConstituentCreateModel
     */
    householdId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    preferredCommunicationChannel?: ConstituentCreateModelPreferredCommunicationChannelEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConstituentCreateModel
     */
    communicationRestrictions?: Array<ConstituentCreateModelCommunicationRestrictionsEnum>;
    /**
     * 
     * @type {string}
     * @memberof ConstituentCreateModel
     */
    emailInterestType?: ConstituentCreateModelEmailInterestTypeEnum;
    /**
     * IDs for custom email interests if the email interest type is Custom
     * @type {Array<number>}
     * @memberof ConstituentCreateModel
     */
    customEmailInterestIds?: Array<number>;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelTypeEnum {
    Individual = 'Individual',
    Organization = 'Organization'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelStatusEnum {
    Active = 'Active',
    Inactive = 'Inactive',
    Deceased = 'Deceased'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelGenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelProfilePictureTypeEnum {
    None = 'None',
    Custom = 'Custom',
    Twitter = 'Twitter'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelPreferredCommunicationChannelEnum {
    Email = 'Email',
    Phone = 'Phone',
    TextMessage = 'TextMessage',
    Mail = 'Mail'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelCommunicationRestrictionsEnum {
    DoNotCall = 'DoNotCall',
    DoNotMail = 'DoNotMail',
    DoNotSolicit = 'DoNotSolicit'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentCreateModelEmailInterestTypeEnum {
    All = 'All',
    Custom = 'Custom',
    OptedOut = 'OptedOut'
}


/**
 * Check if a given object implements the ConstituentCreateModel interface.
 */
export function instanceOfConstituentCreateModel(value: object): value is ConstituentCreateModel {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ConstituentCreateModelFromJSON(json: any): ConstituentCreateModel {
    return ConstituentCreateModelFromJSONTyped(json, false);
}

export function ConstituentCreateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentCreateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['Type'],
        'status': json['Status'] == null ? undefined : json['Status'],
        'firstName': json['FirstName'] == null ? undefined : json['FirstName'],
        'lastName': json['LastName'] == null ? undefined : json['LastName'],
        'middleName': json['MiddleName'] == null ? undefined : json['MiddleName'],
        'prefix': json['Prefix'] == null ? undefined : json['Prefix'],
        'suffix': json['Suffix'] == null ? undefined : json['Suffix'],
        'fullName': json['FullName'] == null ? undefined : json['FullName'],
        'informalName': json['InformalName'] == null ? undefined : json['InformalName'],
        'formalName': json['FormalName'] == null ? undefined : json['FormalName'],
        'envelopeName': json['EnvelopeName'] == null ? undefined : json['EnvelopeName'],
        'recognitionName': json['RecognitionName'] == null ? undefined : json['RecognitionName'],
        'jobTitle': json['JobTitle'] == null ? undefined : json['JobTitle'],
        'employer': json['Employer'] == null ? undefined : json['Employer'],
        'website': json['Website'] == null ? undefined : json['Website'],
        'facebookId': json['FacebookId'] == null ? undefined : json['FacebookId'],
        'twitterId': json['TwitterId'] == null ? undefined : json['TwitterId'],
        'linkedInId': json['LinkedInId'] == null ? undefined : json['LinkedInId'],
        'gender': json['Gender'] == null ? undefined : json['Gender'],
        'birthdate': json['Birthdate'] == null ? undefined : (new Date(json['Birthdate'])),
        'profilePictureType': json['ProfilePictureType'] == null ? undefined : json['ProfilePictureType'],
        'primaryPhone': json['PrimaryPhone'] == null ? undefined : json['PrimaryPhone'],
        'primaryAddress': json['PrimaryAddress'] == null ? undefined : json['PrimaryAddress'],
        'secondaryAddresses': json['SecondaryAddresses'] == null ? undefined : json['SecondaryAddresses'],
        'secondaryEmails': json['SecondaryEmails'] == null ? undefined : json['SecondaryEmails'],
        'secondaryPhones': json['SecondaryPhones'] == null ? undefined : json['SecondaryPhones'],
        'fullCustomProfileImage': json['FullCustomProfileImage'] == null ? undefined : json['FullCustomProfileImage'],
        'croppedCustomProfileImage': json['CroppedCustomProfileImage'] == null ? undefined : json['CroppedCustomProfileImage'],
        'customValues': json['CustomValues'] == null ? undefined : json['CustomValues'],
        'householdId': json['HouseholdId'] == null ? undefined : json['HouseholdId'],
        'preferredCommunicationChannel': json['PreferredCommunicationChannel'] == null ? undefined : json['PreferredCommunicationChannel'],
        'communicationRestrictions': json['CommunicationRestrictions'] == null ? undefined : json['CommunicationRestrictions'],
        'emailInterestType': json['EmailInterestType'] == null ? undefined : json['EmailInterestType'],
        'customEmailInterestIds': json['CustomEmailInterestIds'] == null ? undefined : json['CustomEmailInterestIds'],
    };
}

export function ConstituentCreateModelToJSON(json: any): ConstituentCreateModel {
    return ConstituentCreateModelToJSONTyped(json, false);
}

export function ConstituentCreateModelToJSONTyped(value?: ConstituentCreateModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Type': value['type'],
        'Status': value['status'],
        'FirstName': value['firstName'],
        'LastName': value['lastName'],
        'MiddleName': value['middleName'],
        'Prefix': value['prefix'],
        'Suffix': value['suffix'],
        'FullName': value['fullName'],
        'InformalName': value['informalName'],
        'FormalName': value['formalName'],
        'EnvelopeName': value['envelopeName'],
        'RecognitionName': value['recognitionName'],
        'JobTitle': value['jobTitle'],
        'Employer': value['employer'],
        'Website': value['website'],
        'FacebookId': value['facebookId'],
        'TwitterId': value['twitterId'],
        'LinkedInId': value['linkedInId'],
        'Gender': value['gender'],
        'Birthdate': value['birthdate'] == null ? undefined : ((value['birthdate']).toISOString().substring(0,10)),
        'ProfilePictureType': value['profilePictureType'],
        'PrimaryPhone': value['primaryPhone'],
        'PrimaryAddress': value['primaryAddress'],
        'SecondaryAddresses': value['secondaryAddresses'],
        'SecondaryEmails': value['secondaryEmails'],
        'SecondaryPhones': value['secondaryPhones'],
        'FullCustomProfileImage': value['fullCustomProfileImage'],
        'CroppedCustomProfileImage': value['croppedCustomProfileImage'],
        'CustomValues': value['customValues'],
        'HouseholdId': value['householdId'],
        'PreferredCommunicationChannel': value['preferredCommunicationChannel'],
        'CommunicationRestrictions': value['communicationRestrictions'],
        'EmailInterestType': value['emailInterestType'],
        'CustomEmailInterestIds': value['customEmailInterestIds'],
    };
}

export const ConstituentCreateModelPropertyValidationAttributesMap: {
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

