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

/**
 * 
 * @export
 * @enum {string}
 */
export enum TributeType {
    InHonorOf = 'InHonorOf',
    InMemoryOf = 'InMemoryOf'
}


export function instanceOfTributeType(value: any): boolean {
    for (const key in TributeType) {
        if (Object.prototype.hasOwnProperty.call(TributeType, key)) {
            if (TributeType[key as keyof typeof TributeType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TributeTypeFromJSON(json: any): TributeType {
    return TributeTypeFromJSONTyped(json, false);
}

export function TributeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TributeType {
    return json as TributeType;
}

export function TributeTypeToJSON(value?: TributeType | null): any {
    return value as any;
}

export function TributeTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TributeType {
    return value as TributeType;
}

