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
 * @interface DesignationBase
 */
export interface DesignationBase {
    /**
     * 
     * @type {number}
     * @memberof DesignationBase
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof DesignationBase
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof DesignationBase
     */
    acknowledgementStatus?: DesignationBaseAcknowledgementStatusEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof DesignationBase
     */
    acknowledgementInteractionIds?: Array<number>;
}

/**
* @export
* @enum {string}
*/
export enum DesignationBaseAcknowledgementStatusEnum {
    Yes = 'Yes',
    No = 'No',
    DoNotAcknowledge = 'DoNotAcknowledge'
}


/**
 * Check if a given object implements the DesignationBase interface.
 */
export function instanceOfDesignationBase(value: object): value is DesignationBase {
    return true;
}

export function DesignationBaseFromJSON(json: any): DesignationBase {
    return DesignationBaseFromJSONTyped(json, false);
}

export function DesignationBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DesignationBase {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['Amount'] == null ? undefined : json['Amount'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'acknowledgementStatus': json['AcknowledgementStatus'] == null ? undefined : json['AcknowledgementStatus'],
        'acknowledgementInteractionIds': json['AcknowledgementInteractionIds'] == null ? undefined : json['AcknowledgementInteractionIds'],
    };
}

export function DesignationBaseToJSON(json: any): DesignationBase {
    return DesignationBaseToJSONTyped(json, false);
}

export function DesignationBaseToJSONTyped(value?: DesignationBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Amount': value['amount'],
        'Note': value['note'],
        'AcknowledgementStatus': value['acknowledgementStatus'],
        'AcknowledgementInteractionIds': value['acknowledgementInteractionIds'],
    };
}

export const DesignationBasePropertyValidationAttributesMap: {
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

