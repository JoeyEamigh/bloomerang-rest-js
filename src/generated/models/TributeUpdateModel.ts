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
 * @interface TributeUpdateModel
 */
export interface TributeUpdateModel {
    /**
     * 
     * @type {number}
     * @memberof TributeUpdateModel
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TributeUpdateModel
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof TributeUpdateModel
     */
    tributeType?: TributeUpdateModelTributeTypeEnum;
    /**
     * The IDs of all notificants (constituents) associated with this tribute
     * @type {Array<number>}
     * @memberof TributeUpdateModel
     */
    notificantAccountIds?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof TributeUpdateModel
     */
    name?: string;
    /**
     * Is this the default?
     * @type {boolean}
     * @memberof TributeUpdateModel
     */
    isDefault?: boolean;
    /**
     * Is this active?
     * @type {boolean}
     * @memberof TributeUpdateModel
     */
    isActive?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum TributeUpdateModelTributeTypeEnum {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}


/**
 * Check if a given object implements the TributeUpdateModel interface.
 */
export function instanceOfTributeUpdateModel(value: object): value is TributeUpdateModel {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function TributeUpdateModelFromJSON(json: any): TributeUpdateModel {
    return TributeUpdateModelFromJSONTyped(json, false);
}

export function TributeUpdateModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): TributeUpdateModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'],
        'note': json['Note'] == null ? undefined : json['Note'],
        'tributeType': json['TributeType'] == null ? undefined : json['TributeType'],
        'notificantAccountIds': json['NotificantAccountIds'] == null ? undefined : json['NotificantAccountIds'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'isDefault': json['IsDefault'] == null ? undefined : json['IsDefault'],
        'isActive': json['IsActive'] == null ? undefined : json['IsActive'],
    };
}

export function TributeUpdateModelToJSON(json: any): TributeUpdateModel {
    return TributeUpdateModelToJSONTyped(json, false);
}

export function TributeUpdateModelToJSONTyped(value?: TributeUpdateModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'Note': value['note'],
        'TributeType': value['tributeType'],
        'NotificantAccountIds': value['notificantAccountIds'],
        'Name': value['name'],
        'IsDefault': value['isDefault'],
        'IsActive': value['isActive'],
    };
}

export const TributeUpdateModelPropertyValidationAttributesMap: {
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

