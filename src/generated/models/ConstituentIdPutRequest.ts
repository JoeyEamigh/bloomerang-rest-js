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
import type { ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner } from './ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner';
import {
    ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerFromJSON,
    ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerFromJSONTyped,
    ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerToJSON,
    ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner';
import type { ConstituentPostRequestAllOfAllOfSecondaryEmailsInner } from './ConstituentPostRequestAllOfAllOfSecondaryEmailsInner';
import {
    ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerFromJSON,
    ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerFromJSONTyped,
    ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerToJSON,
    ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfSecondaryEmailsInner';
import type { ConstituentPostRequestAllOfAllOfPrimaryAddress } from './ConstituentPostRequestAllOfAllOfPrimaryAddress';
import {
    ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSON,
    ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSONTyped,
    ConstituentPostRequestAllOfAllOfPrimaryAddressToJSON,
    ConstituentPostRequestAllOfAllOfPrimaryAddressToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfPrimaryAddress';
import type { ConstituentPostRequestAllOfAllOfCustomValuesInner } from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
import {
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSONTyped,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON,
    ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSONTyped,
} from './ConstituentPostRequestAllOfAllOfCustomValuesInner';
import type { ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone } from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone';
import {
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSONTyped,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSON,
    ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSONTyped,
} from './ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone';

/**
 * 
 * @export
 * @interface ConstituentIdPutRequest
 */
export interface ConstituentIdPutRequest {
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    type?: ConstituentIdPutRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    status?: ConstituentIdPutRequestStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    middleName?: string;
    /**
     * Must match a prefix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    prefix?: string;
    /**
     * Must match a suffix in the Bloomerang CRM
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    suffix?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    informalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    formalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    envelopeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    recognitionName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    jobTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    employer?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    website?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    facebookId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    twitterId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    linkedInId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    gender?: ConstituentIdPutRequestGenderEnum;
    /**
     * 
     * @type {Date}
     * @memberof ConstituentIdPutRequest
     */
    birthdate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ConstituentIdPutRequest
     */
    profilePictureType?: ConstituentIdPutRequestProfilePictureTypeEnum;
    /**
     * 
     * @type {ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone}
     * @memberof ConstituentIdPutRequest
     */
    primaryPhone?: ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone;
    /**
     * 
     * @type {ConstituentPostRequestAllOfAllOfPrimaryAddress}
     * @memberof ConstituentIdPutRequest
     */
    primaryAddress?: ConstituentPostRequestAllOfAllOfPrimaryAddress;
    /**
     * Non-primary addresses
     * @type {Array<ConstituentPostRequestAllOfAllOfPrimaryAddress>}
     * @memberof ConstituentIdPutRequest
     */
    secondaryAddresses?: Array<ConstituentPostRequestAllOfAllOfPrimaryAddress>;
    /**
     * Non-primary email addresses
     * @type {Array<ConstituentPostRequestAllOfAllOfSecondaryEmailsInner>}
     * @memberof ConstituentIdPutRequest
     */
    secondaryEmails?: Array<ConstituentPostRequestAllOfAllOfSecondaryEmailsInner>;
    /**
     * Non-primary phones
     * @type {Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone>}
     * @memberof ConstituentIdPutRequest
     */
    secondaryPhones?: Array<ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhone>;
    /**
     * The full picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner>}
     * @memberof ConstituentIdPutRequest
     */
    fullCustomProfileImage?: Array<ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner>;
    /**
     * The cropped picture File Attachment. Note that a Constituent can only have one Profile Picture; adding a new one will remove the old one.
     * @type {Array<ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner>}
     * @memberof ConstituentIdPutRequest
     */
    croppedCustomProfileImage?: Array<ConstituentPostRequestAllOfAllOfFullCustomProfileImageInner>;
    /**
     * 
     * @type {Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>}
     * @memberof ConstituentIdPutRequest
     */
    customValues?: Array<ConstituentPostRequestAllOfAllOfCustomValuesInner>;
}

/**
* @export
* @enum {string}
*/
export enum ConstituentIdPutRequestTypeEnum {
    Individual = 'Individual',
    Organization = 'Organization'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentIdPutRequestStatusEnum {
    Active = 'Active',
    Inactive = 'Inactive',
    Deceased = 'Deceased'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentIdPutRequestGenderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}
/**
* @export
* @enum {string}
*/
export enum ConstituentIdPutRequestProfilePictureTypeEnum {
    None = 'None',
    Custom = 'Custom',
    Twitter = 'Twitter'
}


/**
 * Check if a given object implements the ConstituentIdPutRequest interface.
 */
export function instanceOfConstituentIdPutRequest(value: object): value is ConstituentIdPutRequest {
    return true;
}

export function ConstituentIdPutRequestFromJSON(json: any): ConstituentIdPutRequest {
    return ConstituentIdPutRequestFromJSONTyped(json, false);
}

export function ConstituentIdPutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentIdPutRequest {
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
        'secondaryAddresses': json['SecondaryAddresses'] == null ? undefined : ((json['SecondaryAddresses'] as Array<any>).map(ConstituentPostRequestAllOfAllOfPrimaryAddressFromJSON)),
        'secondaryEmails': json['SecondaryEmails'] == null ? undefined : ((json['SecondaryEmails'] as Array<any>).map(ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerFromJSON)),
        'secondaryPhones': json['SecondaryPhones'] == null ? undefined : ((json['SecondaryPhones'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneFromJSON)),
        'fullCustomProfileImage': json['FullCustomProfileImage'] == null ? undefined : ((json['FullCustomProfileImage'] as Array<any>).map(ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerFromJSON)),
        'croppedCustomProfileImage': json['CroppedCustomProfileImage'] == null ? undefined : ((json['CroppedCustomProfileImage'] as Array<any>).map(ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerFromJSON)),
        'customValues': json['CustomValues'] == null ? undefined : ((json['CustomValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerFromJSON)),
    };
}

export function ConstituentIdPutRequestToJSON(json: any): ConstituentIdPutRequest {
    return ConstituentIdPutRequestToJSONTyped(json, false);
}

export function ConstituentIdPutRequestToJSONTyped(value?: ConstituentIdPutRequest | null, ignoreDiscriminator: boolean = false): any {
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
        'SecondaryAddresses': value['secondaryAddresses'] == null ? undefined : ((value['secondaryAddresses'] as Array<any>).map(ConstituentPostRequestAllOfAllOfPrimaryAddressToJSON)),
        'SecondaryEmails': value['secondaryEmails'] == null ? undefined : ((value['secondaryEmails'] as Array<any>).map(ConstituentPostRequestAllOfAllOfSecondaryEmailsInnerToJSON)),
        'SecondaryPhones': value['secondaryPhones'] == null ? undefined : ((value['secondaryPhones'] as Array<any>).map(ConstituentsGet200ResponseAllOfResultsInnerAllOfAllOfPrimaryPhoneToJSON)),
        'FullCustomProfileImage': value['fullCustomProfileImage'] == null ? undefined : ((value['fullCustomProfileImage'] as Array<any>).map(ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerToJSON)),
        'CroppedCustomProfileImage': value['croppedCustomProfileImage'] == null ? undefined : ((value['croppedCustomProfileImage'] as Array<any>).map(ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerToJSON)),
        'CustomValues': value['customValues'] == null ? undefined : ((value['customValues'] as Array<any>).map(ConstituentPostRequestAllOfAllOfCustomValuesInnerToJSON)),
    };
}

export const ConstituentIdPutRequestPropertyValidationAttributesMap: {
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

