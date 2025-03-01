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
 * @interface AttachmentUrl
 */
export interface AttachmentUrl {
    /**
     * If the file is stored in Bloomerang (not just a URL), this URL will only be good for 24 hours
     * @type {string}
     * @memberof AttachmentUrl
     */
    url?: string;
}

/**
 * Check if a given object implements the AttachmentUrl interface.
 */
export function instanceOfAttachmentUrl(value: object): value is AttachmentUrl {
    return true;
}

export function AttachmentUrlFromJSON(json: any): AttachmentUrl {
    return AttachmentUrlFromJSONTyped(json, false);
}

export function AttachmentUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['Url'] == null ? undefined : json['Url'],
    };
}

export function AttachmentUrlToJSON(json: any): AttachmentUrl {
    return AttachmentUrlToJSONTyped(json, false);
}

export function AttachmentUrlToJSONTyped(value?: AttachmentUrl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Url': value['url'],
    };
}

export const AttachmentUrlPropertyValidationAttributesMap: {
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

