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
 * @interface ProcessorsGet200ResponseAllOfResultsInner
 */
export interface ProcessorsGet200ResponseAllOfResultsInner {
    /**
     * 
     * @type {number}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    sortIndex?: number;
    /**
     * 
     * @type {string}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    name?: string;
    /**
     * Is this the default?
     * @type {boolean}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    isDefault?: boolean;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    isActive?: boolean;
    /**
     * The public key for this processor
     * @type {string}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    publicKey?: string;
    /**
     * Is this a Stripe processor with Stripe Connect enabled?
     * @type {boolean}
     * @memberof ProcessorsGet200ResponseAllOfResultsInner
     */
    isStripeConnect?: boolean;
}

/**
 * Check if a given object implements the ProcessorsGet200ResponseAllOfResultsInner interface.
 */
export function instanceOfProcessorsGet200ResponseAllOfResultsInner(value: object): value is ProcessorsGet200ResponseAllOfResultsInner {
    return true;
}

export function ProcessorsGet200ResponseAllOfResultsInnerFromJSON(json: any): ProcessorsGet200ResponseAllOfResultsInner {
    return ProcessorsGet200ResponseAllOfResultsInnerFromJSONTyped(json, false);
}

export function ProcessorsGet200ResponseAllOfResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorsGet200ResponseAllOfResultsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'type': json['Type'] == null ? undefined : json['Type'],
        'sortIndex': json['SortIndex'] == null ? undefined : json['SortIndex'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'isDefault': json['IsDefault'] == null ? undefined : json['IsDefault'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
        'publicKey': json['PublicKey'] == null ? undefined : json['PublicKey'],
        'isStripeConnect': json['IsStripeConnect'] == null ? undefined : json['IsStripeConnect'],
    };
}

export function ProcessorsGet200ResponseAllOfResultsInnerToJSON(json: any): ProcessorsGet200ResponseAllOfResultsInner {
    return ProcessorsGet200ResponseAllOfResultsInnerToJSONTyped(json, false);
}

export function ProcessorsGet200ResponseAllOfResultsInnerToJSONTyped(value?: ProcessorsGet200ResponseAllOfResultsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Type': value['type'],
        'SortIndex': value['sortIndex'],
        'Name': value['name'],
        'IsDefault': value['isDefault'],
        'IsActive': value['isActive'],
        'PublicKey': value['publicKey'],
        'IsStripeConnect': value['isStripeConnect'],
    };
}

export const ProcessorsGet200ResponseAllOfResultsInnerPropertyValidationAttributesMap: {
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

