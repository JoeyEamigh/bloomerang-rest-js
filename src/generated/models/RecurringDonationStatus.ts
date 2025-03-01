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
export enum RecurringDonationStatus {
    Active = 'Active',
    Closed = 'Closed',
    Overdue = 'Overdue'
}


export function instanceOfRecurringDonationStatus(value: any): boolean {
    for (const key in RecurringDonationStatus) {
        if (Object.prototype.hasOwnProperty.call(RecurringDonationStatus, key)) {
            if (RecurringDonationStatus[key as keyof typeof RecurringDonationStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function RecurringDonationStatusFromJSON(json: any): RecurringDonationStatus {
    return RecurringDonationStatusFromJSONTyped(json, false);
}

export function RecurringDonationStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringDonationStatus {
    return json as RecurringDonationStatus;
}

export function RecurringDonationStatusToJSON(value?: RecurringDonationStatus | null): any {
    return value as any;
}

export function RecurringDonationStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): RecurringDonationStatus {
    return value as RecurringDonationStatus;
}

