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
export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}


export function instanceOfGender(value: any): boolean {
    for (const key in Gender) {
        if (Object.prototype.hasOwnProperty.call(Gender, key)) {
            if (Gender[key as keyof typeof Gender] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GenderFromJSON(json: any): Gender {
    return GenderFromJSONTyped(json, false);
}

export function GenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Gender {
    return json as Gender;
}

export function GenderToJSON(value?: Gender | null): any {
    return value as any;
}

export function GenderToJSONTyped(value: any, ignoreDiscriminator: boolean): Gender {
    return value as Gender;
}

