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
import type { ConstituentMergeModelAllOfFullCustomProfileImage } from './ConstituentMergeModelAllOfFullCustomProfileImage';
import {
    ConstituentMergeModelAllOfFullCustomProfileImageFromJSON,
    ConstituentMergeModelAllOfFullCustomProfileImageFromJSONTyped,
    ConstituentMergeModelAllOfFullCustomProfileImageToJSON,
    ConstituentMergeModelAllOfFullCustomProfileImageToJSONTyped,
} from './ConstituentMergeModelAllOfFullCustomProfileImage';
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner';
import type { ConstituentPostRequestAllOfAllOfPrimaryAddress } from './ConstituentPostRequestAllOfAllOfPrimaryAddress';
import {
    ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSON,
    ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSONTyped,
    ConstituentPostRequestAllOfAllOfPrimaryAddressToJSON,
    ConstituentPostRequestAllOfAllOfPrimaryAddressToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfPrimaryAddress';
import type { ConstituentMergeModelAllOfCustomValues } from './ConstituentMergeModelAllOfCustomValues';
import {
    ConstituentMergeModelAllOfCustomValuesFromJSON,
    ConstituentMergeModelAllOfCustomValuesFromJSONTyped,
    ConstituentMergeModelAllOfCustomValuesToJSON,
    ConstituentMergeModelAllOfCustomValuesToJSONTyped,
} from './ConstituentMergeModelAllOfCustomValues';
import type { ConstituentMergeModelAllOfCroppedCustomProfileImage } from './ConstituentMergeModelAllOfCroppedCustomProfileImage';
import {
    ConstituentMergeModelAllOfCroppedCustomProfileImageFromJSON,
    ConstituentMergeModelAllOfCroppedCustomProfileImageFromJSONTyped,
    ConstituentMergeModelAllOfCroppedCustomProfileImageToJSON,
    ConstituentMergeModelAllOfCroppedCustomProfileImageToJSONTyped,
} from './ConstituentMergeModelAllOfCroppedCustomProfileImage';
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone';

/**
 * Additional validation note - passing in SecondaryAddresses, SecondaryEmails, or SecondaryPhones will throw an exception.
 * @export
 * @interface ConstituentMergeModel
 */
export interface ConstituentMergeModel {
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    type?: ConstituentMergeModelTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    status?: ConstituentMergeModelStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    middleName?: string;
    /**
     * Must match a prefix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    prefix?: string;
    /**
     * Must match a suffix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    suffix?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    informalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    formalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    envelopeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    recognitionName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    jobTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    employer?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    facebookId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    twitterId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    linkedInId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    gender?: ConstituentMergeModelGenderEnum;
    /**
     * 
     * @type {Date}
     * @memberof ConstituentMergeModel
     */
    birthdate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    profilePictureType?: ConstituentMergeModelProfilePictureTypeEnum;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone}
     * @memberof ConstituentMergeModel
     */
    primaryPhone?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone;
    /**
     * 
     * @type {ConstituentPostRequestAllOfAllOfPrimaryAddress}
     * @memberof ConstituentMergeModel
     */
    primaryAddress?: ConstituentPostRequestAllOfAllOfPrimaryAddress;
    /**
     * The full picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<ConstituentMergeModelAllOfFullCustomProfileImage>}
     * @memberof ConstituentMergeModel
     */
    fullCustomProfileImage?: Array<ConstituentMergeModelAllOfFullCustomProfileImage>;
    /**
     * The cropped picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<ConstituentMergeModelAllOfCroppedCustomProfileImage>}
     * @memberof ConstituentMergeModel
     */
    croppedCustomProfileImage?: Array<ConstituentMergeModelAllOfCroppedCustomProfileImage>;
    /**
     * 
     * @type {Array<ConstituentMergeModelAllOfCustomValues>}
     * @memberof ConstituentMergeModel
     */
    customValues?: Array<ConstituentMergeModelAllOfCustomValues>;
    /**
     * 
     * @type {string}
     * @memberof ConstituentMergeModel
     */
    emailInterestType?: ConstituentMergeModelEmailInterestTypeEnum;
    /**
     * IDs for custom email interests if the email interest type is Custom
     * @type {Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner>}
     * @memberof ConstituentMergeModel
     */
    customEmailInterestIds?: Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInner>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConstituentMergeModel
     */
    communicationRestrictions?: Array<ConstituentMergeModelCommunicationRestrictionsEnum>;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelTypeEnum {
    Individual = 'Individual',
    Organization = 'Organization'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelStatusEnum {
    Active = 'Active',
    Inactive = 'Inactive',
    Deceased = 'Deceased'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelGenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelProfilePictureTypeEnum {
    None = 'None',
    Custom = 'Custom',
    Twitter = 'Twitter'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelEmailInterestTypeEnum {
    All = 'All',
    Custom = 'Custom',
    OptedOut = 'OptedOut'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentMergeModelCommunicationRestrictionsEnum {
    DoNotCall = 'DoNotCall',
    DoNotMail = 'DoNotMail',
    DoNotSolicit = 'DoNotSolicit'
}


/**
 * Check if a given object implements the ConstituentMergeModel interface.
 */
export function instanceOfConstituentMergeModel(value: object): value is ConstituentMergeModel {
    return true;
}

export function ConstituentMergeModelFromJSON(json: any): ConstituentMergeModel {
    return ConstituentMergeModelFromJSONTyped(json, false);
}

export function ConstituentMergeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentMergeModel {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['Type'] == null ? undefined : json['Type'],
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
        'primaryPhone': json['PrimaryPhone'] == null ? undefined : ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSON(json['PrimaryPhone']),
        'primaryAddress': json['PrimaryAddress'] == null ? undefined : ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSON(json['PrimaryAddress']),
        'fullCustomProfileImage': json['FullCustomProfileImage'] == null ? undefined : ((json['FullCustomProfileImage'] as Array<any>).map(ConstituentMergeModelAllOfFullCustomProfileImageFromJSON)),
        'croppedCustomProfileImage': json['CroppedCustomProfileImage'] == null ? undefined : ((json['CroppedCustomProfileImage'] as Array<any>).map(ConstituentMergeModelAllOfCroppedCustomProfileImageFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(ConstituentMergeModelAllOfCustomValuesFromJSON)),
        'emailInterestType': json['EmailInterestType'] == null ? undefined : json['EmailInterestType'],
        'customEmailInterestIds': json['CustomEmailInterestIds'] == null ? undefined : ((json['CustomEmailInterestIds'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerFromJSON)),
        'communicationRestrictions': json['CommunicationRestrictions'] == null ? undefined : json['CommunicationRestrictions'],
    };
}

export function ConstituentMergeModelToJSON(json: any): ConstituentMergeModel {
    return ConstituentMergeModelToJSONTyped(json, false);
}

export function ConstituentMergeModelToJSONTyped(value?: ConstituentMergeModel | null, ignoreDiscriminator: boolean = false): any {
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
        'PrimaryPhone': ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSON(value['primaryPhone']),
        'PrimaryAddress': ConstituentPostRequestAllOfAllOfPrimaryAddressToJSON(value['primaryAddress']),
        'FullCustomProfileImage': value['fullCustomProfileImage'] == null ? undefined : ((value['fullCustomProfileImage'] as Array<any>).map(ConstituentMergeModelAllOfFullCustomProfileImageToJSON)),
        'CroppedCustomProfileImage': value['croppedCustomProfileImage'] == null ? undefined : ((value['croppedCustomProfileImage'] as Array<any>).map(ConstituentMergeModelAllOfCroppedCustomProfileImageToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(ConstituentMergeModelAllOfCustomValuesToJSON)),
        'EmailInterestType': value['emailInterestType'],
        'CustomEmailInterestIds': value['customEmailInterestIds'] == null ? undefined : ((value['customEmailInterestIds'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfCustomEmailInterestsInnerToJSON)),
        'CommunicationRestrictions': value['communicationRestrictions'],
    };
}

export const ConstituentMergeModelPropertyValidationAttributesMap: {
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

