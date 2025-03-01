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
 * @interface ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf
 */
export interface ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf {
    /**
     * The GUID of the object uploaded to S3. This should be generated by the client that is uploading the file attachment.
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf
     */
    guid?: string;
    /**
     * User-friendly file name without the extension.
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf
     */
    name?: string;
    /**
     * No dot needed (use "txt" instead of ".txt"). May be null if the attachment is just a URL.
     * @type {string}
     * @memberof ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf
     */
    extension?: string;
}

/**
 * Check if a given object implements the ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf interface.
 */
export function instanceOfConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf(value: object): value is ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf {
    return true;
}

export function ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfFromJSON(json: any): ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf {
    return ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfFromJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf {
    if (json == null) {
        return json;
    }
    return {
        
        'guid': json['Guid'] == null ? undefined : json['Guid'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'extension': json['Extension'] == null ? undefined : json['Extension'],
    };
}

export function ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfToJSON(json: any): ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf {
    return ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfToJSONTyped(json, false);
}

export function ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfToJSONTyped(value?: ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOf | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Guid': value['guid'],
        'Name': value['name'],
        'Extension': value['extension'],
    };
}

export const ConstituentPostRequestAllOfAllOfFullCustomProfileImageInnerOneOfPropertyValidationAttributesMap: {
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

