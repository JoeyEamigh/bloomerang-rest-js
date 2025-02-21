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
export enum EftAccountType {
    Checking = 'Checking',
    Savings = 'Savings'
}


export function instanceOfEftAccountType(value: any): boolean {
    for (const key in EftAccountType) {
        if (Object.prototype.hasOwnProperty.call(EftAccountType, key)) {
            if (EftAccountType[key as keyof typeof EftAccountType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function EftAccountTypeFromJSON(json: any): EftAccountType {
    return EftAccountTypeFromJSONTyped(json, false);
}

export function EftAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EftAccountType {
    return json as EftAccountType;
}

export function EftAccountTypeToJSON(value?: EftAccountType | null): any {
    return value as any;
}

export function EftAccountTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): EftAccountType {
    return value as EftAccountType;
}

