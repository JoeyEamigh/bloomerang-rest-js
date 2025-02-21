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
export enum AccountStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    Deceased = 'Deceased'
}


export function instanceOfAccountStatus(value: any): boolean {
    for (const key in AccountStatus) {
        if (Object.prototype.hasOwnProperty.call(AccountStatus, key)) {
            if (AccountStatus[key as keyof typeof AccountStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AccountStatusFromJSON(json: any): AccountStatus {
    return AccountStatusFromJSONTyped(json, false);
}

export function AccountStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountStatus {
    return json as AccountStatus;
}

export function AccountStatusToJSON(value?: AccountStatus | null): any {
    return value as any;
}

export function AccountStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): AccountStatus {
    return value as AccountStatus;
}

